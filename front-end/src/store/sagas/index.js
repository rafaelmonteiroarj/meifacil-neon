import { all, takeLatest } from 'redux-saga/effects';

import { Types as StartTypes } from '../ducks/charges';
import {
  charges,
  saveCharge,
} from './charges';

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    /* some sagas only receive an action */
    takeLatest(StartTypes.SEARCH_REQUEST, charges),
    takeLatest(StartTypes.SAVE_CHARGE, saveCharge),
  ]);
}
