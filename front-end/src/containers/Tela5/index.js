import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CurrencyInput from 'react-currency-input';

import Header from '../../components/Header';
import {
  Footer, Content, ButtonContinuar,
} from '../Tela2/styles';

const Tela3 = () => {
  const dispatch = useDispatch();
  const { charges, step } = useSelector((state) => state.charges);

  const saveAndContinue = (e) => {
    e.preventDefault();

    dispatch({
      type: 'charges/SEND_VALUE',
      payload: {
        value: e.target.value.value,
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
      <form
        onSubmit={saveAndContinue}
      >
        <Fragment>
          <Content>
            <div className="container">
              <h2>E qual o valor do produto ou serviço?</h2>
              <CurrencyInput
                name="value"
                decimalSeparator=","
                thousandSeparator="."
                placeholder="R$ 0,00"
                value={charges.value ? charges.value : ''}
                type="text"
                className="form-control"
                required
              />
            </div>
          </Content>
          <Footer>
            <div className="container">
              <ButtonContinuar type="submit">
                    Continuar
              </ButtonContinuar>
            </div>
          </Footer>
        </Fragment>
      </form>
    </Fragment>
  );
};

export default withRouter(Tela3);
