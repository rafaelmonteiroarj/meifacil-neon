import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import moment from 'moment';
import Header from '../../components/Header';
import { HeaderHome, ButtonEnviarCobranca, Footer } from './styles';
import imgCartao from '../../assets/images/cartao.png';

const Tela8 = () => {
  const dispatch = useDispatch();
  const { charges } = useSelector(state => state.charges);

  const saveAndContinue = e => {
    e.preventDefault();

    dispatch({
      type: 'charges/SAVE_CHARGE',
      payload: {
        charges,
      },
    });
  };

  return (
    <Fragment>
      <Header title="Enviar nova Cobrança" />
      <form onSubmit={saveAndContinue}>
        <HeaderHome>
          <section className="container column-nowrap">
            <div className="item">
              <img src={imgCartao} alt="" />
            </div>
            <div className="item">
              <p>R$ {charges.value}</p>
            </div>
            <div className="item">
              <small>Compra de cartuchos</small>
            </div>
          </section>
        </HeaderHome>
        <div className="home-data">
          <div className="container">
            <div className="box">
              <div>Vencimento</div>
              <div>{moment(charges.dateDue).format('DD/MM/YYYY')}</div>
            </div>
            <hr />
            <div className="box">
              <div>Nome Completo:</div>
              <div>{charges.name}</div>
            </div>
            <hr />
            <div className="box">
              <div>E-mail</div>
              <div>{charges.email}</div>
            </div>
            <hr />
            <div className="box">
              <div>Forma de pagamento:</div>
              <div>Cartão de Crédito</div>
            </div>
            <hr />
            <div className="box">
              <div>Líquido a receber</div>
              <div>R$ {charges.value}</div>
            </div>
            <hr />

            <div className="box">
              <div>Número de parcelas:</div>
              <div>Até {charges.installmentPayment}x</div>
            </div>
          </div>
          <Footer>
            <div className="container">
              <ButtonEnviarCobranca onClick={saveAndContinue}>Enviar cobrança</ButtonEnviarCobranca>
            </div>
          </Footer>
        </div>
      </form>
    </Fragment>
  );
};

export default withRouter(Tela8);
