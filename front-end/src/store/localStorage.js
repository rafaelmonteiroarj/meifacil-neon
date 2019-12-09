import crypto from 'crypto';

const alg = 'aes-256-ctr';
const pwd = 'm3i-f@c1l';

const loadState = () => {
  try {
    const decipher = crypto.createDecipher(alg, pwd);
    const localStorageState = decipher.update(localStorage.getItem('charges'), 'hex', 'utf8');
    if (localStorageState === null) return undefined;
    return JSON.parse(localStorageState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  const { charges } = state;

  const storeState = {
    charges: {
      charges: charges.charges,
      isFetching: charges.isFetching,
      textFetching: charges.textFetching,
      step: charges.step,
      balanceCancelled: charges.balanceCancelled,
      balancesDue: charges.balancesDue,
      balancePendingRelease: charges.balancePendingRelease,
      balanceRelease: charges.balanceRelease,
      balanceAwaitingMaturity: charges.balanceAwaitingMaturity,
      request: charges.request,
      response: charges.response,
    },
  };

  const cipher = crypto.createCipher(alg, pwd);
  const crypted = cipher.update(JSON.stringify(storeState), 'utf8', 'hex');
  localStorage.setItem('charges', crypted);
};

export {
  loadState, saveState,
};
