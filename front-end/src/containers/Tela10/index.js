import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';

import { HeaderCobranca, TextCobrancas, TextValorCobranca } from './styles';
import { currencyFormat } from '../../services/serviceCustom';
import { Container, Title } from '../../components/Header/styles';

const ListagemVencidas = () => {
  const { response, balanceAwaitingMaturity } = useSelector(state => state.charges);

  const now = new Date();
  const { data } = response;
  const chargesNotDateDue = data.filter(item => now < new Date(item.dateDue));
  console.log('chargesNotDateDue', chargesNotDateDue);

  return (
    <Fragment>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Container>
          <MdKeyboardBackspace size={24} color="FFF" className="pointer" />
          <Title>Cobranças a vencer</Title>
        </Container>
      </Link>
      <HeaderCobranca>
        <TextValorCobranca>
          <p>R$ {currencyFormat(balanceAwaitingMaturity.amount)}</p>
        </TextValorCobranca>
        <TextCobrancas>
          <p>Cobranças não pagas e que ainda não venceram</p>
        </TextCobrancas>
      </HeaderCobranca>
      <div className="home-data">
        <div className="container bloco-cobrancas">
          <div className="col-12">
            <div className="row">
              <div className="col-10">
                <div className="box">
                  <b>Vinícius Monteiro Arjonas</b>
                  <p>01/03/2019</p>
                </div>
                <div className="box">
                  <div>Compra de Cartuchos</div>
                  <div>R$ 52,12</div>
                </div>
              </div>
              <div className="col-2" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(ListagemVencidas);
