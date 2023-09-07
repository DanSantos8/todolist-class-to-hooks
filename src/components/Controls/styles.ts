import styled from "styled-components"

export const Button = styled.button<{ isEditing: boolean }>`
  width: 60px;
  font-size: 12px;
  background-color: ${(props) => (props.isEditing ? "#FF7675" : "#00b894")};
  margin-left: auto;
  border: none;
  color: white;
  border-radius: 4px;
  padding: 4px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #74b9ff;
  }
`
