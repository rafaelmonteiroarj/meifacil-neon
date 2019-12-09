import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import InputMask from 'react-input-mask';

import Header from '../../components/Header';
import { Footer, Content, ButtonContinuar } from './styles';

const Tela7 = () => {
  const dispatch = useDispatch();
  const { charges, step } = useSelector(state => state.charges);

  const saveAndContinue = e => {
    e.preventDefault();

    dispatch({
      type: 'charges/SEND_DATA_DUE',
      payload: {
        dateDue: moment(e.target.value.value, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      },
    });

    dispatch({
      type: 'charges/NEXT_STEP',
      payload: step,
    });
  };

  return (
    <Fragment>
      <Header title="Enviar nova cobrança" />
      <form onSubmit={saveAndContinue}>
        <Fragment>
          <Content>
            <div className="container">
              <h2>Qual a data de vencimento?</h2>
              <p>Indique a data de pagamento que combinou com seu cliente.</p>
              <InputMask
                name="value"
                placeholder="(99/99/9999) - data de vencimento"
                type="text"
                mask="99/99/9999"
                className="form-control"
                required
              />
            </div>
          </Content>
          <Footer>
            <div className="container">
              <ButtonContinuar type="submit">Continuar</ButtonContinuar>
            </div>
          </Footer>
        </Fragment>
      </form>
    </Fragment>
  );
};

export default withRouter(Tela7);
