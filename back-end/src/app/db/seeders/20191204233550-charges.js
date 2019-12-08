Date.prototype.addDays = function(days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const date = new Date();

module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('charges', [
      {
        name: 'Test 1',
        email: 'test1@meifacil.com',
        description: 'Test 1...',
        value: 7.45,
        installment_payment: 1,
        balance_status: 'not_released',
        date_due: date.addDays(10),
      },
      {
        name: 'Test 2',
        email: 'test2@meifacil.com',
        description: 'Test 2 ...',
        value: 10.45,
        installment_payment: 2,
        balance_status: 'not_released',
        date_due: date.addDays(40),
      },
      {
        name: 'Test 3',
        email: 'test3@meifacil.com',
        description: 'Test 3 ...',
        value: 10.45,
        installment_payment: 2,
        balance_status: 'released',
        date_due: date.addDays(40),
      },
      {
        name: 'Test 4',
        email: 'test4@meifacil.com',
        description: 'Test 4 ...',
        value: 125.45,
        installment_payment: 6,
        balance_status: 'cancelled',
        date_due: date.addDays(5),
      },
    ]),

  down: queryInterface => queryInterface.bulkDelete('charges', null, {}),
};
