import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import {
  Footer, Content, ButtonContinuar, Information,
} from './styles';
import imgInformacoes from '../../assets/images/informacoes.png';

const Tela2 = () => {
  const dispatch = useDispatch();
  const { charges, step } = useSelector((state) => state.charges);

  const saveAndContinue = (e) => {
    e.preventDefault();

    dispatch({
      type: 'charges/SEND_NAME',
      payload: {
        name: e.target.value.value,
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
              <h2>Qual é o nome completo do seu cliente?</h2>
              <input
                name="value"
                placeholder="Nome Completo"
                type="text"
                defaultValue={charges.name ? charges.name : ''}
                className="form-control"
                required
              />
            </div>
          </Content>
          <Information>
            <div className="container">
              <p>
                <img src={imgInformacoes} alt="" /> Saiba quanto vai pagar por esse
                    serviço
              </p>
            </div>
          </Information>
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

export default withRouter(Tela2);
