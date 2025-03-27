export function formatCurrency(amount: number) {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}

export function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat(
    'en-US',
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }
  );
  return formatter.format(date);
}