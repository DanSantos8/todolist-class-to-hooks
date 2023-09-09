import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 12px;
`

export const Button = styled.button<{ danger?: boolean }>`
  font-size: 12px;
  background-color: ${(props) => (props.danger ? "#FF7675" : "#00b894")};
  border: none;
  color: white;
  border-radius: 4px;
  padding: 4px 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
  }
`

export const Applied = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.green};
  text-decoration: underline;
`
