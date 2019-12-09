import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import { Footer, Content, ButtonContinuar } from '../Tela2/styles';

const Tela3 = () => {
  const dispatch = useDispatch();
  const { charges, step } = useSelector(state => state.charges);

  const saveAndContinue = e => {
    e.preventDefault();

    dispatch({
      type: 'charges/SEND_EMAIL',
      payload: {
        email: e.target.value.value,
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
              <h2>E qual é o e-mail do seu cliente?</h2>
              <input
                name="value"
                placeholder="E-mail"
                defaultValue={charges.email ? charges.email : ''}
                type="text"
                className="form-control"
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

export default withRouter(Tela3);
