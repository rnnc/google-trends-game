import styled from 'styled-components';

export default styled.button`

  cursor: pointer;
  outline: none;
  padding: 6px ${({ width }) => (width ? width : 20)}px;

  font: 1em 'Roboto', sans-serif;
  font-weight: 600;

  background: transparent;
  color: white;
  border-radius: 25px;
  border: 2px solid white;

  transition: all 0.12s;
  &:hover{
    background: white;
    color: black;
    box-shadow: 0px 0px 5px 1px rgba(256,256,256,0.7);
  }
`;
