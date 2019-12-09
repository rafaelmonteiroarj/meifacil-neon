
/* action Types */
export const Types = {
  SEARCH_REQUEST: 'charges/SEARCH_REQUEST',
  NEXT_STEP: 'charges/NEXT_STEP',
  PREVIOUS_STEP: 'charges/PREVIOUS_STEP',

  SEND_NAME: 'charges/SEND_NAME',
  SEND_EMAIL: 'charges/SEND_EMAIL',
  SEND_DESCRIPTION: 'charges/SEND_DESCRIPTION',
  SEND_VALUE: 'charges/SEND_VALUE',
  SEND_INSTALLMENT_PAYMENT: 'charges/SEND_INSTALLMENT_PAYMENT',
  SEND_DATA_DUE: 'charges/SEND_DATA_DUE',

  SAVE_CHARGE: 'charges/SAVE_CHARGE',

  /* adding answers to the searched information ( success or error) */
  ADD_SUCCESS: 'charges/ADD_SUCCESS',
  ADD_ERROR: 'charges/ADD_ERROR',
};

/* reducer */
const initialStateStart = {
  charges: {
    name: '',
    email: '',
    description: '',
    value: '',
    installmentPayment: 1,
    dateDue: '',
  },
  isFetching: false,
  textFetching: '',
  step: 1,
  balanceCancelled: {
    amount: 0.00,
    quantity: 0,
  },
  balancesDue: {
    amount: 0.00,
    quantity: 0,
  },
  balancePendingRelease: {
    amount: 0.00,
    quantity: 0,
  },
  balanceRelease: {
    amount: 0.00,
    quantity: 0,
  },
  balanceAwaitingMaturity: {
    amount: 0.00,
    quantity: 0,
  },
  request: {},
  response: {},
};


export function charges(state = initialStateStart, action) {
  switch (action.type) {
  case Types.SEARCH_REQUEST:
    return {
      ...state,
      isFetching: true,
      textFetching: 'Carregando seu conteúdo ...',
      charges: {
        name: '',
        email: '',
        description: '',
        value: '',
        installmentPayment: 1,
        dateDue: '',
      },
      step: 1,
      request: [],
    };
  case Types.SAVE_CHARGE:
    return {
      ...state,
    };
  case Types.NEXT_STEP:
    return {
      ...state,
      step: action.payload + 1,
    };
  case Types.PREVIOUS_STEP:
    return {
      ...state,
      step: action.payload === 1 ? 1 : action.payload - 1,
    };
  case Types.SEND_NAME:
    return {
      ...state,
      charges: {
        ...state.charges,
        name: action.payload.name,
      },
    };
  case Types.SEND_EMAIL:
    return {
      ...state,
      charges: {
        ...state.charges,
        email: action.payload.email,
      },
    };
  case Types.SEND_DESCRIPTION:
    return {
      ...state,
      charges: {
        ...state.charges,
        description: action.payload.description,
      },
    };
  case Types.SEND_VALUE:
    return {
      ...state,
      charges: {
        ...state.charges,
        value: action.payload.value,
      },
    };
  case Types.SEND_INSTALLMENT_PAYMENT:
    return {
      ...state,
      charges: {
        ...state.charges,
        installmentPayment: action.payload.installmentPayment,
      },
    };
  case Types.SEND_DATA_DUE:
    return {
      ...state,
      charges: {
        ...state.charges,
        dateDue: action.payload.dateDue,
      },
    };
  case Types.ADD_SUCCESS:
    return {
      ...state,
      isFetching: false,
      textFetching: '',
      response: action.payload.response,
      balanceCancelled: {
        amount: action.payload.response.balanceCancelled.amount,
        quantity: action.payload.response.balanceCancelled.quantity,
      },
      balancesDue: {
        amount: action.payload.response.balancesDue.amount.toFixed(2),
        quantity: action.payload.response.balancesDue.quantity,
      },
      balancePendingRelease: {
        amount: action.payload.response.balancePendingRelease.amount.toFixed(2),
        quantity: action.payload.response.balancePendingRelease.quantity,
      },
      balanceRelease: {
        amount: action.payload.response.balanceRelease.amount.toFixed(2),
        quantity: action.payload.response.balanceRelease.quantity,
      },
      balanceAwaitingMaturity: {
        amount: action.payload.response.balanceAwaitingMaturity.amount.toFixed(2),
        quantity: action.payload.response.balanceAwaitingMaturity.quantity,
      },
    };
  case Types.ADD_ERROR:
    return {
      ...state,
      isFetching: false,
      request: action.payload.data,
    };
  default:
    return state;
  }
}

/* action creators */
export const Creators = {
  success: (response) => ({
    type: Types.ADD_SUCCESS,
    payload: { response },
  }),

  nextStep: (step) => ({
    type: Types.NEXT_STEP,
    payload: step,
  }),

  error: (error) => ({
    type: Types.ADD_ERROR,
    payload: { error },
  }),
};
