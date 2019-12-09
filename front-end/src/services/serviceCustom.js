export const currencyFormat = num =>
  num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export const liquidValue = (installmentPayment, value) => {
  switch (installmentPayment) {
    case '1':
      return value;
    case '2':
      return (parseFloat(value) * 0.5) / 100;
    case '3':
      return (value * 1.5) / 100;
    case '4':
      return (value * 2.5) / 100;
    default:
      return value;
  }
};
