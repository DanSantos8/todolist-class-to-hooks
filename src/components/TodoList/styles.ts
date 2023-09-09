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
  multipleDeleteEnabled?: boolean
}>`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  border-radius: 4px;
  padding: 4px 8px;
  border: none;
  background-color: #00b894;
  cursor: pointer;
  transition: all ease 0.5s;

  ${(props) =>
    props.multipleDeleteEnabled &&
    css`
      background-color: #ff7675;
    `}
`

export const Delete = styled.div``
