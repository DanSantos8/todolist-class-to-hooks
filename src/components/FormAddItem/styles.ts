import styled from "styled-components"

export const TaskForm = styled.form``

export const AddItemContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const TextInput = styled.input`
  font-size: 12px;
  padding: 10px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`

export const AddButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.green};
  font-weight: 500;
  font-size: 22px;
  width: 30px;
  height: 25px;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.blue};
  }
`
