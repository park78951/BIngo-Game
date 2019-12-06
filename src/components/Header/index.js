import React from 'react';
import CompleteLines from './CompleteLines';
import Button from '.././CustomButton';
import { START_BUTTON, RESTART_BUTTON } from '../../helper/conatants/interfaceTitle';
import Style from './styles';


const Header = () => {
  return (
    <Style.HeaderWrapper>
      <CompleteLines />
      <Button>
        { START_BUTTON }
      </Button>
      <CompleteLines />
    </Style.HeaderWrapper>
  );
};

export default Header;