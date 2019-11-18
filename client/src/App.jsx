import React, { Component } from 'react';
import styled from 'styled-components';

import Login from './Components/Login/Login';
import Button from './Components/Button';


const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.5em;
  color: white;
  font: 500 3em 'Red Hat Display', sans-serif;
`;

const Body = styled.div`
  background-color: #192538;
  min-height: 100vh;
  z-index: 1;
`;

const LoginBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5000;
  background: rgba(0,0,0,0.4);
  height: 100vh;
  width: 100vw;
  opacity: 0;
  transition: all 0.25s;
  backdrop-filter: blur(0);
  &.visible{
    opacity: 1;
    backdrop-filter: blur(4px);
  }
`;

export default class App extends Component {

  constructor() {
    super();
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  state = {
    login_visible: false
  }

  toggleLogin(e) {
    e.preventDefault();
    this.setState({
      login_visible: !this.state.login_visible
    })
  }

  render() {

    const { login_visible } = this.state;

    return (
      <Body>

        <Header>
          Google Trends Game
        </Header>

        <LoginBackdrop
          hidden={ !login_visible }
          className={ login_visible ? "visible" : "" }
          onClick={ this.toggleLogin }
        />

        <Login visible={ login_visible } />

        <Button onClick={ this.toggleLogin }> Login </Button>

      </Body>
    );
  }
};
