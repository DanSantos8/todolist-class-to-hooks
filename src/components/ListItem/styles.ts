import styled from "styled-components"

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  transition: all 0.2s ease;
  gap: 12px;

  div {
    min-width: 45px;
    text-align: center;
  }

  &:hover {
    background-color: #ccc;
  }

  button {
    background-color: transparent;
    width: 100%;
    padding: 8px 0;
    text-align: left;
    border: none;
    cursor: pointer;
  }
`
