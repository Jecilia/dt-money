export const dateFormatter = new Intl.DateTimeFormat('pt-pt')

export const priceFormatter = new Intl.NumberFormat('pt-pt', {
  style: 'currency',
  currency: 'BRL',
})
