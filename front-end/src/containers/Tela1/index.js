import React, { Fragment, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import Header from '../../components/Header';
import {
  HeaderHome,
  ButtonTransferir,
  ButtonNovaCobranca,
  Footer,
} from './styles';
import imgLiberar from '../../assets/images/a-liberar.png';
import imgVencimento from '../../assets/images/a-vencer.png';
import imgAtrasado from '../../assets/images/atrasados.png';
import imgCancelado from '../../assets/images/cancelados.png';

// import Home from '../Home';
const MainForm = () => {
  const dispatch = useDispatch();
  const {
    step, balancePendingRelease,
    balanceAwaitingMaturity, balancesDue, balanceCancelled,
  } = useSelector((state) => state.charges);


  const enviarNovaCobranca = (e) => {
    e.preventDefault();

    dispatch({
      type: 'charges/NEXT_STEP',
      payload: step,
    });
  };

  const initFetchMethod = useCallback(() => {
    dispatch({
      type: 'charges/SEARCH_REQUEST',
    });
  }, [dispatch]);


  useEffect(() => {
    initFetchMethod();
  }, [initFetchMethod]);

  return (
    <Fragment>
      <Header title="Enviar Cobrança" />
      <HeaderHome>
        <p>R$ 0,00</p>
        <small>Saldo liberado para transferência</small>
      </HeaderHome>
      <ButtonTransferir>Transferir</ButtonTransferir>
      <div className="home-data">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-4 col-6">
              <div id="box-card">
                <div className="card-body">
                  <div className="row no-gutters">
                    <div className="col mr-2">
                      <img src={imgLiberar} alt="" />
                      <div className="mt-1 titleHome">A liberar</div>
                      <div className="mt-1 valorHome">R$ { balancePendingRelease.amount }</div>
                    </div>
                    <div className="qtdLiberarHome">{ balancePendingRelease.quantity }</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4 col-6">
              <Link
                to="/cobrancas/avencer"
                style={{ textDecoration: 'none' }}
              >
                <div id="box-card">
                  <div className="card-body">
                    <div className="row no-gutters">
                      <div className="col mr-2">
                        <img src={imgVencimento} alt="" />
                        <div className="mt-1 titleHome">a vencer</div>
                        <div className="mt-1 valorHome">R$ { balanceAwaitingMaturity.amount }</div>
                      </div>
                      <div className="qtdVencimentoHome">{ balanceAwaitingMaturity.quantity }</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xl-3 col-md-6 mb-4 col-6">
              <div id="box-card">
                <div className="card-body">
                  <div className="row no-gutters">
                    <div className="col mr-2">
                      <img src={imgAtrasado} alt="" />
                      <div className="mt-1 titleHome">Atrasados</div>
                      <div className="mt-1 valorHome">R$ { balancesDue.amount }</div>
                    </div>
                    <div className="qtdAtrasadoHome">{ balancesDue.quantity }</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4 col-6">
              <div id="box-card">
                <div className="card-body">
                  <div className="row no-gutters">
                    <div className="col mr-2">
                      <img src={imgCancelado} alt="" />
                      <div className="mt-1 titleHome">cancelados</div>
                      <div className="mt-1 valorHome">R$ { balanceCancelled.amount }</div>
                    </div>
                    <div className="qtdCanceladoHome">{ balanceCancelled.quantity }</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer>
            <div className="container">
              <ButtonNovaCobranca onClick={enviarNovaCobranca}>
                  Enviar nova cobrança
              </ButtonNovaCobranca>
            </div>
          </Footer>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(MainForm);
