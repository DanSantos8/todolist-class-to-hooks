import styled from "styled-components"

export const Layout = styled.main`
  display: flex;
  flex: 1;
  height: 100vh;
  padding: 24px;
  align-items: center;
  justify-content: center;
  max-width: 450px;
  margin: auto;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  height: 100%;
  background-color: white;
  padding: 24px;
  border-radius: 8px;
`

export const Title = styled.h3`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin: 20px 0;
`

export const BackToListButton = styled.button`
  color: #333;
  background-color: transparent;
  font-size: 12px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`

export const TaskList = styled.div``

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
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`

export const AddButton = styled.button`
  background-color: #333;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`
