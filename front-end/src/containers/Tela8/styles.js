import styled from 'styled-components';

export const HeaderHome = styled.div`
  background: #fff;
  max-width: 360px;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;

  .item {
    flex: 1;
    margin: 5px;
    text-align: center;
  }

  p {
    font-size: 32px;
    color: #0096af;
    font-weight: bold;
    display: inline-block;
    border-bottom: 2px solid #0096af;
    padding-bottom: 4px;
    text-align: center;
    width: 142px;
  }

  small {
    color: #999999;
    font-size: 16px;
  }
`;

export const Footer = styled.div`
  height: 80px;
  position: fixed;
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
