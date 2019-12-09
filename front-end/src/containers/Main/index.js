import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Tela1 from '../Tela1';
import Tela2 from '../Tela2';
import Tela3 from '../Tela3';
import Tela4 from '../Tela4';
import Tela5 from '../Tela5';
import Tela6 from '../Tela6';
import Tela7 from '../Tela7';
import Tela8 from '../Tela8';
import Tela9 from '../Tela9';

const Main = () => {
  const { step } = useSelector((state) => state.charges);

  switch (step) {
  case 1:
    return (
      <Tela1 />
    );
  case 2:
    return (
      <Tela2 />
    );
  case 3:
    return (
      <Tela3 />
    );
  case 4:
    return (
      <Tela4 />
    );
  case 5:
    return (
      <Tela5 />
    );
  case 6:
    return (
      <Tela6 />
    );
  case 7:
    return (
      <Tela7 />
    );
  case 8:
    return (
      <Tela8 />
    );
  case 9:
    return (
      <Tela9 />
    );
  default:
    return <Tela1 />;
  }
};

export default withRouter(Main);
