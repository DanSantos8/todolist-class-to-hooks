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
  overflow-y: hidden;
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
  overflow-y: auto;
`

export const Title = styled.h3`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin: 20px 0;
`

export const TaskList = styled.div``
