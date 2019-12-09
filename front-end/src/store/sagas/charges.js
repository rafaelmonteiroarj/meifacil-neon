import { call, put } from 'redux-saga/effects';
// import { push } from 'react-router-redux';
import { toast } from 'react-toastify';

import { Creators as chargesActions } from '../ducks/charges';
import serviceMei from '../../services/serviceMei';

export function* charges() {
  try {
    const { data } = yield call(serviceMei.get, '/charges');

    if (data) {
      yield put(chargesActions.success(data));
    } else {
      const messageError = 'Serviço indisponivél..';
      yield put(chargesActions.error(messageError));
    }
  } catch (err) {
    yield put(chargesActions.error(err));
  }
}

export function* saveCharge(action) {
  try {
    const { charges, step } = action.payload;
    console.log('step >>>>>>>>>>>>>', step);

    const request = {
      name: charges.name,
      email: charges.email,
      description: charges.description,
      value: charges.value.replace(',', '.'),
      installmentPayment: charges.installmentPayment,
      dateDue: charges.dateDue,
    };

    const { data } = yield call(serviceMei.post, '/charges', request);

    if (!data.error) {
      toast.success('Cobrança gerada com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      yield put(chargesActions.nextStep(step));
    } else {
      toast.error(`Não foi possivél gerar a cobrança! \n ${data.error}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  } catch (err) {
    toast.error('Não foi possivél gerar a cobrança!', {
      position: toast.POSITION.TOP_RIGHT,
    });
    yield put(chargesActions.error(err));
  }
}
