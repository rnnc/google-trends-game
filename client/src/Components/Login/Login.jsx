import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../Button';

const Container = styled.div`
  display: inline-flex;
  color: white;
  padding: 1em;
  text-align: center;

  /* border: 1px solid red; */
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-evenly;
  
  border: 2px solid white;
  border-radius: 25px;

  /* box-shadow: 1px 5px 10px 2px rgba(0,0,0,0.7); */
  background: #2D4654 ;
  box-shadow: 2px 2.5px 12px 1px rgba(0,0,0,0.75);
`;

const FieldWrapper = styled.span`
  display: flex;
  flex-direction: column;
  padding: 8px 10px;
  justify-content: space-between;
  align-self: center;
  /* border: 1px solid red; */
`;

const Label = styled.label`
  padding: 0px 10px 5px 10px;
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

  border-radius: 25px;
  outline: none;
  transition: all 0.2s;
  border: 2.5px solid transparent;
  text-align: center;
  font: 0.9em "Noto Sans", sans-serif;

  &:focus{
    border: 2.5px solid #0060fa;
    box-shadow: 2px 2px 5px 1px rgba(0,0,0,1)
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
    return (
      <Container>

        <FormWrapper>

          <FieldWrapper>
            <Label>Username</Label>
            <Input
              type="text" placeholder="Enter Username"
            />
          </FieldWrapper>

          <FieldWrapper>
            <Label hidden={ this.state.passwordFocus }>Password</Label>
            <Input
              type="password" placeholder="Enter Password"
            />
          </FieldWrapper>

          <FieldWrapper>
            <Button width={ 45 }> Login/Register </Button>
          </FieldWrapper>

        </FormWrapper>

      </Container>
    );
  }
}

export default Login;