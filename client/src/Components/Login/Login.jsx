import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../Button';

const Container = styled.div`
  position: absolute;
  left: 20vw;
  top: 30vh;

  display: inline-flex;
  flex-direction: column;
  color: white;
  padding: 1em;
  text-align: center;
  z-index: 5001;
  transition: all 0.2s;
  transform: scale(0.25);
  opacity: 0;

  border-radius: 5px;
  background: #2D4654 ;
  box-shadow: 2px 2.5px 12px 1px rgba(0,0,0,0.75);

  &.visible{
    transform: scale(1);
    opacity: 1;
  }
`;

const Header = styled.span`
  font-size: 1.4em;
  font-weight: 700;
  font-style: italic;
  padding-bottom: 5px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: space-evenly;
  
`;

const FieldWrapper = styled.span`
  display: flex;
  /* flex-direction: column; */
  padding: 8px 10px;
  justify-content: space-between;
  
  &._button{
   padding-top: 15px;
  }

  &._header{
    align-self: center;
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

  background: #5b6871;
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

  &:hover{
    background: #6f828f;
  }

  &:focus{
    border: 2px solid #0060fa;
    background: #86949e;
  }
`;

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      passwordFocus: false,
      username: "",
      password: "",
      usernameError: false,
      passwordError: false,
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    const { visible } = this.props;

    return (

      <>

        <Container hidden={ !visible } className={ visible ? "visible" : "" }>
          <FieldWrapper className="_header">
            <Header>LOGIN FORM</Header>
          </FieldWrapper>
          <FormWrapper>

            <FieldWrapper>
              <Label>Username</Label>
              <Input
                name="username" type="text"
                onChange={ this.onChange }
              />
            </FieldWrapper>

            <FieldWrapper>
              <Label hidden={ this.state.passwordFocus }>Password</Label>
              <Input
                name="password" type="password"
                onChange={ this.onChange }
              />
            </FieldWrapper>

            <FieldWrapper className="_button">
              <Button width={ 20 }> Login/Register </Button>
              <Button> Anonymous </Button>
            </FieldWrapper>

          </FormWrapper>

        </Container>

      </>
    );
  }
}

export default Login;