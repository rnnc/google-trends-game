import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../Button';

const Container = styled.div`
  position: absolute;
  left: 20vw;
  top: 30vh;

  display: inline-flex;
  color: white;
  padding: 1em;
  text-align: center;
  z-index: 5001;
  /* border: 1px solid red; */
  transition: all 0.2s;
  transform: scale(0.25);
  opacity: 0;

  &.visible{
    transform: scale(1);
    opacity: 1;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-evenly;
  
  /* border: 2px solid white; */
  border-radius: 5px;

  /* box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.7); */
  background: #2D4654 ;
  box-shadow: 2px 2.5px 12px 1px rgba(0,0,0,0.75);
`;

const FieldWrapper = styled.span`
  display: flex;
  /* flex-direction: column; */
  padding: 8px 10px;
  justify-content: space-between;
  
  &._button{
   align-self:center;
  }
`;

const Label = styled.label`
  padding: 5px 10px 5px 10px;
  color: white;
  font: 1em "Noto Sans", sans-serif;
  margin: auto;
`;

const Input = styled.input.attrs(({ type, placeholder }) => ({ type, placeholder }))`
  padding: 5px 10px;

  background: #86949E;
  color: white; 

  ::placeholder{
    color: white;
  }

  border-radius: 5px;
  outline: none;
  transition: all 0.2s;
  border: 2px solid transparent;
  text-align: center;
  font: 0.9em "Noto Sans", sans-serif;

  &:focus{
    border: 2px solid #0060fa;
    
  }
`;

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      passwordFocus: false
    }
  }

  render() {

    const { visible } = this.props;

    return (

      <React.Fragment>

        <Container hidden={ !visible } className={ visible ? "visible" : "" }>

          <FormWrapper>

            <FieldWrapper>
              <Label>Username</Label>
              <Input type="text" />
            </FieldWrapper>

            <FieldWrapper>
              <Label hidden={ this.state.passwordFocus }>Password</Label>
              <Input type="password" />
            </FieldWrapper>

            <FieldWrapper className="_button">
              <Button width={ 45 }> Login/Register </Button>
            </FieldWrapper>

          </FormWrapper>

        </Container>
      </React.Fragment>
    );
  }
}

export default Login;