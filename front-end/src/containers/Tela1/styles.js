import styled from 'styled-components';

export const HeaderHome = styled.div`
  height: 160px;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    font-size: 32px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #0096af;
    font-weight: bold;
    display: inline-block;
    border-bottom: 2px solid #0096af;
    padding-bottom: 4px;
    text-align: center;
    width: 142px;
    top: 180px;
  }

  small {
    position: relative;
    left: 50%;
    top: 50px;
    transform: translate(-50%, -50%);
    margin-top: 5em;
    color: #999999;
    font-size: 16px;
  }
`;

export const ButtonTransferir = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  background-color: #f0b400;
  border-color: #f0b400;
  width: 135px;
  height: 40px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  text-transform: uppercase;
  border-radius: 26px;
  cursor: pointer;
  top: 40px;
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

export const ButtonNovaCobranca = styled.div`
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
