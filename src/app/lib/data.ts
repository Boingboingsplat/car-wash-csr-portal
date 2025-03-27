import postgres from 'postgres';
import { LatestPurchasesTable, Purchase, Subscription, User, UsersTable } from './definitions';
import { formatCurrency, formatDate } from './utils';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getHomeCardData() {
  try {
    const data = await sql`
      SELECT 
          (SELECT COUNT(*) FROM users) AS total_users,
          (SELECT COUNT(*) FROM subscriptions) AS total_subscriptions,
          (SELECT COUNT(*) FROM purchases) AS total_purchases
    `;

    return data[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.')
  }
}

export async function fetchFilteredUsers(query: string) {
  try {
    const users = await sql<UsersTable[]>`
      SELECT 
        users.id, 
        users.name, 
        users.email, 
        users.phone,
        COUNT(subscriptions.id) AS subscription_count
      FROM 
        users
      LEFT JOIN 
        subscriptions ON users.id = subscriptions.user_id
      WHERE
        users.name ILIKE ${`%${query}%`} OR
        users.email ILIKE ${`%${query}%`} OR
        users.phone ILIKE ${`%${query}%`}
      GROUP BY 
        users.id
      ORDER BY users.name ASC
    `;

    return users;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.')
  }
}

export async function fetchUser(user_id: string) {
  try {
    const users = await sql<User[]>`
      SELECT 
        users.id, 
        users.name, 
        users.email, 
        users.phone
      FROM 
        users
      WHERE
        users.id = ${`${user_id}`}
    `;

    return users[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user.')
  }
}

export async function fetchSubscription(subscription_id: string) {
  try {
    const subscriptions = await sql<Subscription[]>`
      SELECT 
        subscriptions.id,
        subscriptions.user_id,
        users.name,
        subscriptions.status,
        subscriptions.make_model,
        subscriptions.license
      FROM 
        subscriptions
      JOIN users ON subscriptions.user_id = users.id
      WHERE
        subscriptions.id = ${`${subscription_id}`}
    `;

    return subscriptions[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch subscription.')
  }
}

export async function fetchUserSubscriptions(user_id: string) {
  try {
    const subscriptions = await sql<Subscription[]>`
      SELECT 
        subscriptions.id,
        subscriptions.status,
        subscriptions.make_model,
        subscriptions.license 
      FROM 
        subscriptions
      WHERE
        subscriptions.user_id = ${`${user_id}`}
    `;

    return subscriptions;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user subscriptions.')
  }
}

// Map purchase types to a displayed string
const typeStringMap = {
  single: "Single Car Wash",
  subscription: "Subscription Payment",
}

export async function fetchUserPurchases(user_id: string) {
  try {
    const purchases = await sql<Purchase[]>`
      SELECT 
        purchases.id,
        purchases.type,
        purchases.status,
        purchases.amount,
        purchases.date
      FROM 
        purchases
      WHERE
        purchases.user_id = ${`${user_id}`}
      ORDER BY purchases.date DESC
    `;

    // Format currency and date as strings
    const userPurchases = purchases.map((purchase) => ({
      ...purchase,
      type: typeStringMap[purchase.type],
      amount: formatCurrency(purchase.amount),
      date: formatDate(purchase.date),
    }));

    return userPurchases;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user purchase history.')
  }
}

const LATEST_PURCHASES_LIMIT = 10;
export async function fetchLatestPurchases() {
  try {
    const purchases = await sql<LatestPurchasesTable[]>`
      SELECT 
        purchases.id,
        users.name,
        purchases.type,
        purchases.status,
        purchases.amount,
        purchases.date
      FROM 
        purchases
      JOIN users ON purchases.user_id = users.id
      ORDER BY purchases.date DESC
      LIMIT ${LATEST_PURCHASES_LIMIT}
    `;

    // Format currency and date as strings
    const latestPurchases = purchases.map((purchase) => ({
      ...purchase,
      type: typeStringMap[purchase.type],
      amount: formatCurrency(purchase.amount),
      date: formatDate(purchase.date),
    }));

    return latestPurchases;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch recent purchases.')
  }
}