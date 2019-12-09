import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import {
  Footer, Content, ButtonContinuar,
} from '../Tela2/styles';

const Tela4 = () => {
  const dispatch = useDispatch();
  const { charges, step } = useSelector((state) => state.charges);

  const saveAndContinue = (e) => {
    e.preventDefault();

    dispatch({
      type: 'charges/SEND_DESCRIPTION',
      payload: {
        description: e.target.value.value,
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
              <h2>Descreva em poucas palavras qual o produto ou serviço oferecido</h2>
              <input
                name="value"
                defaultValue={charges.description ? charges.description : ''}
                placeholder="ex.: Venda de camiseta branca"
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

export default withRouter(Tela4);
