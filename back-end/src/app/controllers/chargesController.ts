import { Request, Response } from 'express';

import { add, list, listByStatus, getById } from '../repositories/repositoryCharges';

/**
 * add charge
 * @param _req
 * @param res
 */
const addCharge = async (_req: Request, res: Response) => {
  try {
    /** valid request */
    _req.checkBody('name', 'invalid name').notEmpty();
    _req.checkBody('email', 'invalid email').isEmail();
    _req.checkBody('description', 'invalid description').len({ min: 4 });
    _req.checkBody('value', 'invalid value').isFloat();
    _req.checkBody('installmentPayment', 'invalid installmentPayment').isInt();
    _req.checkBody('dateDue', 'invalid dateDue').notEmpty();

    const errors: any = _req.validationErrors();
    if (errors) return res.status(422).send({ errors });

    /** make request */
    const request = {
      name: _req.body.name,
      email: _req.body.email,
      description: _req.body.description,
      value: _req.body.value,
      installmentPayment: _req.body.installmentPayment,
      dateDue: _req.body.dateDue,
    };

    const result = await add(request);
    return res.send({ data: result ? result : [] });
  } catch (err) {
    return res.send({ error: err }).status(400);
  }
};

/**
 * charges listing
 * @param _req
 * @param res
 */
const listCharges = async (_req: Request, res: Response) => {
  let result;

  try {
    result = await list();
  } catch (err) {
    return res.send({ error: err }).status(400);
  }

  const now = new Date();

  const balancePendingReleaseArray = result.filter(
    item => now < new Date(item.dateDue) && item.balanceStatus == 'not_released',
  );

  const balanceCancelledArray = result.filter(item => item.balanceStatus == 'cancelled');
  const balanceReleaseArray = result.filter(item => now < new Date(item.dateDue) && item.balanceStatus == 'released');
  const balancesDueArray = result.filter(item => now > new Date(item.dateDue));
  const balanceAwaitingMaturityArray = result.filter(item => now < new Date(item.dateDue));

  return res.send({
    data: result ? result : [],
    balanceCancelled: {
      amount: balanceCancelledArray.reduce((total, item) => {
        return total + item.value;
      }, 0),
      quantity: balanceCancelledArray.length,
    },
    balancesDue: {
      amount: balancesDueArray.reduce((total, item) => {
        return total + item.value;
      }, 0),
      quantity: balancesDueArray.length,
    },
    balancePendingRelease: {
      amount: balancePendingReleaseArray.reduce((total, item) => {
        return total + item.value;
      }, 0),
      quantity: balancePendingReleaseArray.length,
    },
    balanceRelease: {
      amount: balanceReleaseArray.reduce((total, item) => {
        return total + item.value;
      }, 0),
      quantity: balanceReleaseArray.length,
    },
    balanceAwaitingMaturity: {
      amount: balanceAwaitingMaturityArray.reduce((total, item) => {
        return total + item.value;
      }, 0),
      quantity: balanceAwaitingMaturityArray.length,
    },
  });
};

/**
 * list charges by status
 * @param _req
 * @param res
 */
const listChargesByStatus = async (_req: Request, res: Response) => {
  try {
    /** valid request */
    _req.checkParams('status', 'invalid balanceStatus').notEmpty();
    const errors: any = _req.validationErrors();
    if (errors) return res.status(422).send({ errors });
    const result = await listByStatus(_req.params.status);
    const valueTotal = result.reduce((total, item) => {
      return total + item.value;
    }, 0);
    return res.send({ data: result ? result : [], valueTotal });
  } catch (err) {
    return res.send({ error: err }).status(400);
  }
};

/**
 * list charges by id
 * @param _req
 * @param res
 */
const listChargesById = async (_req: Request, res: Response) => {
  try {
    /** valid request */
    _req.checkParams('id', 'invalid id').notEmpty();
    const errors: any = _req.validationErrors();
    if (errors) return res.status(422).send({ errors });
    const result = await getById(_req.params.id);
    return res.send({ data: result ? result : [] });
  } catch (err) {
    return res.send({ error: err }).status(400);
  }
};

export default {
  addCharge,
  listCharges,
  listChargesByStatus,
  listChargesById,
};
