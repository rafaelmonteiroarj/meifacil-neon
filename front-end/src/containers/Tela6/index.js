import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import { Footer, Content, ButtonContinuar } from './styles';

const Tela6 = () => {
  const dispatch = useDispatch();
  const { charges, step } = useSelector(state => state.charges);

  const saveAndContinue = e => {
    e.preventDefault();

    dispatch({
      type: 'charges/SEND_INSTALLMENT_PAYMENT',
      payload: {
        installmentPayment: e.target.value.value,
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
              <h2>Em até quantas vezes o seu cliente pode parcelar?</h2>
              <div className="box-select">
                <select name="value" className="form-control" required>
                  <option value="">Selecione uma parcela ..</option>
                  <option value="1" selected={charges.installmentPayment === '1' ? 'selected' : ''}>
                    1 parcela de R$ {charges.value}
                  </option>
                  <option value="2" selected={charges.installmentPayment === '2' ? 'selected' : ''}>
                    2 parcela de R$ {charges.value}
                  </option>
                  <option value="3" selected={charges.installmentPayment === '3' ? 'selected' : ''}>
                    3 parcela de R$ {charges.value}
                  </option>
                  <option value="4" selected={charges.installmentPayment === '4' ? 'selected' : ''}>
                    4 parcela de R$ {charges.value}
                  </option>
                </select>
              </div>
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

export default withRouter(Tela6);
