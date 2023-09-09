import styled, { css } from "styled-components"

export const TodoItem = styled.li<{ completed: boolean }>`
  display: flex;
  gap: 8px;
  font-size: 12px;
  font-weight: 400;
  padding: 8px 4px;
  transition: all 0.2s ease;
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;

  &:hover {
    border-color: #ccc;
    box-shadow: 0px 0px 2px black;

    button {
      display: block;
    }
  }

  ${(props) =>
    props.completed &&
    css`
      text-decoration: line-through;
      color: #aaa;
    `}
`

export const Label = styled.label`
  display: flex;
  font-weight: 500;
  width: calc(100% - 40px);
  min-height: 30px;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`

export const ControlButton = styled.button<{ danger?: boolean }>`
  display: none;
  font-size: 12px;
  border-radius: 4px;
  color: white;
  font-weight: 700;
  border: none;
  background-color: #00b894;
  cursor: pointer;
  margin: auto 8px auto auto;

  ${(props) =>
    props.danger &&
    css`
      background-color: #ff7675;
    `}
`

export const CustomCheckBox = styled.div`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
`

export const CheckMark = styled.div`
  position: absolute;
  top: calc(50% - 4px);
  left: 0;
  bottom: 0;
  height: 9px;
  width: 9px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`

export const Checkbox = styled.input<{ isDelete?: boolean }>`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${CheckMark} {
    background-color: #2196f3;
    border: 1px solid #2196f3;
  }

  ${(props) =>
    props.isDelete &&
    css`
      &:checked + ${CheckMark} {
        background-color: #ff7675;
        border: 1px solid #ff7675;
      }
    `}
`

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
`
