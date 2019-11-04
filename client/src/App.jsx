import React, { Component } from 'react';
import styled from 'styled-components';


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
  background-color: #282c34;
  min-height: 100vh;
`;

export default class App extends Component {
  render() {
    return (
      <Body>

        <Header>
            Google Trends Game
        </Header>

        

      </Body>
    );
  }
};
