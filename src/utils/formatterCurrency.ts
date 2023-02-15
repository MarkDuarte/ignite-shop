export function formatterCurrency(valueCurrency: number) {
  const value = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valueCurrency)

  return value;
}