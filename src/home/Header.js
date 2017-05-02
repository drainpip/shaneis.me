import React from 'react';
import ContentContainer from '../patterns/containers/Content';

const Header = (props) => {
  return (
    <ContentContainer>
      <h1 className="App-header__title">Shane is me</h1>
      <p className="App-header__quote">"But who is wurs shod, than the shoemakers wyfe, With shops full of newe shapen shoes all hir lyfe?"</p>
    </ContentContainer>
  );
};

export default Header;
