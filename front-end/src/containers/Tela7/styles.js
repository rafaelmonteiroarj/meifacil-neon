import styled from 'styled-components';

export const Content = styled.div`
  h2 {
    margin-top: 40px;
    font-size: 28px;
    text-align: left;
    line-height: 37px;
    color: #0096af;
  }

  p {
    font-size: 16px;
    color: #707070;
  }

  .container {
    height: auto;
  }

  input {
    margin-top: 98px;
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

export const ButtonContinuar = styled.button`
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
