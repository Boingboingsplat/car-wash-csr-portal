export type User = {
  id: string,
  name: string,
  email: string,
  phone: string,
}

export type UsersTable = {
  id: string,
  name: string,
  email: string,
  phone: string,
  subscription_count: number
}

export type Subscription = {
  id: string,
  user_id: string,
  name: string,
  status: 'active' | 'pending' | 'overdue',
  make_model: string,
  license: string,
}

export type Purchase = {
  id: string,
  user_id: string,
  type: 'single' | 'subscription',
  status: 'paid' | 'failed',
  amount: number,
  date: string,
}

export type UserPurchasesTable = {
  id: string,
  type: 'single' | 'subscription',
  status: 'paid' | 'failed',
  amount: string,
  date: string,
}

export type LatestPurchasesTable = {
  id: string,
  name: string,
  type: 'single' | 'subscription',
  status: 'paid' | 'failed',
  amount: number,
  date: string,
}