export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD'
    // minimumFractionDigits: 0,
    // maximumFractionDigits: 0,
    // currencyDisplay: 'symbol'
  }).format(price)
}
