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
    font-size: 12px;
    color: #707070;
  }

  .container {
    height: auto;
  }

  .box-select {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.box-select select {
  background-color: #ffffff;
  font-size: 16px;
  border-radius: 8px;
  height: 50px;
  color: #5baeba;
  border: 1px solid #b1b4be;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
}

.box-select::before {
  content: "\f107";
  font-family: FontAwesome;
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  text-align: center;
  font-size: 16px;
  line-height: 45px;
  color: #fff;
  background-color: #f0b400;
  pointer-events: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

@media screen and (min-width: 320px) {
  .box-select select {
    width: 290px;
  }
}

@media screen and (min-width: 360px) {
  .box-select select {
    width: 340px;
  }
}

@media screen and (min-width: 768px) {
  .box-select select {
    width: 500px;
  }
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
