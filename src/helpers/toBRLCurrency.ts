export const toBRLCurrency = (currency: string | number) => {
  const [integerPart, decimalPart] = Number(currency).toFixed(2).split('.');

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    '.',
  );

  const result = 'R$ ' + `${formattedIntegerPart},${decimalPart}`;

  return result;
};
