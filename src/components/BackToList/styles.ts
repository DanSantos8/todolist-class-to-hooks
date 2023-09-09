import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    font-size: 14px;
    color: #333;
  }
`

export const BackToListButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 500;
`
