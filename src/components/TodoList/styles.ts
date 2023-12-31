import styled, { css } from "styled-components"

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Controls = styled.div`
  display: flex;
  gap: 8px;
`

export const ControlButton = styled.button<{
  danger?: boolean
}>`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  border-radius: 4px;
  padding: 4px 8px;
  border: none;
  background-color: ${(props) => props.theme.colors.green};
  cursor: pointer;
  transition: all ease 0.5s;

  ${(props) =>
    props.danger &&
    css`
      background-color: ${(props) => props.theme.colors.red};
    `}
`

export const Delete = styled.div``
