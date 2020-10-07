import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 200px;
  padding: 1rem;
  margin: 0.4rem;
  background: #292929;
  border: none;
  border-radius: 0.4rem;
  color: #e1e1e1;
  font-size: x-large;
  cursor: pointer;
  outline: none;
  transition-duration: 0.3s;
  text-decoration: none;

  &:hover {
    background-color: #4caf50;
  }

  @media screen and (max-width: 700px) {
    padding: 1rem;
    margin: 0.4rem;
    font-size: large;
  }
`

export default function Button({ title, onClick }) {
  return <StyledButton onClick={onClick} >{title}</StyledButton>
}
