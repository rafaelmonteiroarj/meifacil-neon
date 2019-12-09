import styled from 'styled-components';

export const HeaderHome = styled.div`
  background: #fff;
  max-width: 360px;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;

  .item {
    flex: 1;
    margin: 30px;
    text-align: center;
  }

  h1 {
    color: #0096af;
    font-size: 28px;
  }
`;

export const Footer = styled.div`
  height: 80px;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f4f4f6;
  color: white;
  text-align: center;
`;

export const ButtonEnviarCobranca = styled.div`
  color: #48495a;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffcd36;
  border-color: #ecb308;
  margin-top: 10px;
  display: block;
  width: 100%;
  height: 60px;
  text-transform: uppercase;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

export const Compartilhar = styled.div`
  height: 63px;
  margin: 40px 0px;
  background-color: #fff;
  color: #efaf12;

  p {
    float: left;
    margin: 20px;
    color: #efaf12;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
  }

  img {
    float: right;
    margin: 20px;
  }
`;
