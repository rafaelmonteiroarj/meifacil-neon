import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import Header from '../../components/Header';
import {
  HeaderHome,
  ButtonEnviarCobranca,
  Footer,
  Compartilhar,
} from './styles';
import imgCartao from '../../assets/images/ilust-cartão.png';
import imgCompartilhar from '../../assets/images/compartilhar.png';

const Tela9 = () => {
  const dispatch = useDispatch();
  const { charges, step } = useSelector((state) => state.charges);

  const saveAndContinue = (e) => {
    e.preventDefault();

    dispatch({
      type: 'charges/NEXT_STEP',
      payload: step,
    });
  };


  return (
    <Fragment>
      <Header title="Enviar nova Cobrança" />
      <HeaderHome>
        <section className="container column-nowrap">
          <div className="item">
            <img src={imgCartao} alt="" />
          </div>
          <div className="item">
            <h1>Cobrança Gerada com Sucesso!</h1>
          </div>
        </section>
      </HeaderHome>
      <div className="home-data">
        <div className="container">
          <div className="box">
            <div>Valor</div>
            <div>R$ { charges.value }</div>
          </div>
          <hr />
          <div className="box">
            <div>Descrição:</div>
            <div>{ charges.description }</div>
          </div>
          <hr />
          <div className="box">
            <div>Vencimento</div>
            <div>{ moment(charges.dateDue).format('DD/MM/YYYY') }</div>
          </div>
          <hr />
          <div className="box">
            <div>Nome Completo:</div>
            <div>{ charges.name }</div>
          </div>
          <hr />
          <div className="box">
            <div>Forma de pagamento</div>
            <div>Cartão de Crédito</div>
          </div>
          <hr />

          <div className="box">
            <div>Número de parcelas:</div>
            <div>Até { charges.installmentPayment }x</div>
          </div>
        </div>
        <Compartilhar>
          <div className="box2">
            <p>Compartilhar</p>
            <img src={imgCompartilhar} alt="" />
          </div>
        </Compartilhar>
        <Footer>
          <div className="container">
            <ButtonEnviarCobranca onClick={saveAndContinue}>
                Voltar ao início
            </ButtonEnviarCobranca>
          </div>
        </Footer>
      </div>
    </Fragment>
  );
};

export default withRouter(Tela9);
