import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }

  #box-card {
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
  }

  .titleHome {
    color: #707070;
    font-size: 10px;
    text-transform: uppercase;
  }

  .valorHome {
    color: #707070;
    font-size: 16px;
  }

  .qtdLiberarHome {
    font-size: 10px;
    color: #0096af;
    display: inline-block;
    text-align: center;
    width: 2.4em;
    height: 2.4em;
    line-height: 2.4em;
    border-radius: 50%;
    border: 1px solid #0096af;
  }

  .qtdVencimentoHome {
    font-size: 10px;
    color: #f0b400;
    display: inline-block;
    text-align: center;
    width: 2.4em;
    height: 2.4em;
    line-height: 2.4em;
    border-radius: 50%;
    border: 1px solid #f0b400;
  }

  .qtdAtrasadoHome {
    font-size: 10px;
    color: #f46363;
    display: inline-block;
    text-align: center;
    width: 2.4em;
    height: 2.4em;
    line-height: 2.4em;
    border-radius: 50%;
    border: 1px solid #f46363;
  }

  .qtdCanceladoHome {
    font-size: 10px;
    color: #b1b4be;
    display: inline-block;
    text-align: center;
    width: 2.4em;
    height: 2.4em;
    line-height: 2.4em;
    border-radius: 50%;
    border: 1px solid #b1b4be;
  }

  .home-data {
    background-color: #F4F4F6;
    height:460px;
    padding-top: 40px;
  }

  input {
    margin-top: 100px;
    margin-bottom: 210px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 50px;
    font-size: 16px;
    color: red;
    border: 1px solid #b1b4be;
  }

  input[type='text'] {
    color: #b1b4be;
  }

.box {
  font-size: 16px;
  color: #707070;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
}

hr {
  margin-top: 1px !important;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid #cccccc !important;
}

.bloco-cobrancas {
  height: 85px;
  background-color: #fff;
}
`;
