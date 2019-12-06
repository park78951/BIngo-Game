import React from 'react';
import Style from './styles';

const CustomButton = ({ children, onClick }) => {
  return (
    <Style.CustomButtonWrapper onClick={ onClick } >
      { children }
    </Style.CustomButtonWrapper>
  );
};

export default CustomButton;