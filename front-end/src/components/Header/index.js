import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { MdKeyboardBackspace } from 'react-icons/md';
import { Container, Title } from './styles';

const Header = (props) => {
  const dispatch = useDispatch();
  const charges = useSelector((state) => state.charges);

  const comeBack = (e) => {
    e.preventDefault();

    dispatch({
      type: 'charges/PREVIOUS_STEP',
      payload: charges.step,
    });
  };

  return (
    <Container onClick={comeBack}>
      <MdKeyboardBackspace size={24} color="FFF" className="pointer" />
      <Title>{props.title}</Title>
    </Container>
  );
};

export default withRouter(Header);
