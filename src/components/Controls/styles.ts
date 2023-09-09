import styled from "styled-components"

export const Button = styled.button<{ isEditing?: boolean }>`
  font-size: 12px;
  background-color: ${(props) => (props.isEditing ? "#FF7675" : "#00b894")};
  border: none;
  color: white;
  border-radius: 4px;
  padding: 8px 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #74b9ff;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-bottom: 12px;
`
