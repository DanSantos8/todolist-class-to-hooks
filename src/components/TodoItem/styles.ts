import styled from "styled-components"

export const TodoItem = styled.li`
  display: flex;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  padding: 8px 0 8px 0;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ccc;
  }

  label {
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: auto;
  }
`
