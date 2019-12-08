import 'dotenv/config';

import { getById, list, add, listByStatus } from '../src/app/repositories/repositoryCharges';

/* listById */
test('get charge by id', async () => {
  const result = await getById('1')
    .then(res => res)
    .catch(err => err);
  expect(result.id).toEqual(1);
});

/* listCharges */
test('get charges', async () => {
  const result = await list()
    .then(res => res)
    .catch(err => err);
  expect(result).toBeTruthy();
});

/* ListChargeByStatus */
test('list unreleased charges', async () => {
  const result = await listByStatus('not_released')
    .then(res => res)
    .catch(err => err);
  expect(result).toBeTruthy();
});

/* CreateCharge */
test('create charge', async () => {
  const body = {
    name: 'Vinicius Monteiro Arjonas',
    email: 'viniciusmonteiroarjonas@outlook.com',
    description: 'Compra de um PS4',
    value: 987.45,
    installmentPayment: 1,
    dateDue: '2019-12-18T01:03:58.000Z',
    balanceStatus: 'not_released',
    createdAt: '2019-12-08T01:03:58.000Z',
    updatedAt: '2019-12-08T01:03:58.000Z',
  };
  const result = await add(body)
    .then(res => res)
    .catch(err => err);
  expect(result).toBeTruthy();
});
