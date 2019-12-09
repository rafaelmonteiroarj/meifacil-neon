import styled from 'styled-components';

export const HeaderCobranca = styled.div`
  height: 199px;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TextValorCobranca = styled.div`
  p {
    font-size: 32px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #f0b400;
    font-weight: bold;
    display: inline-block;
    border-bottom: 2px solid #f0b400;
    padding-bottom: 4px;
    text-align: center;
    width: 200px;
    top: 180px;
  }
`;

export const TextCobrancas = styled.div`
  p {
    position: absolute;
    margin-top: 5em;
    text-align: center;
    font-size: 16px;
    color: #999999;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 160px;
  }
`;
