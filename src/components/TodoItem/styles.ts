import styled, { css } from "styled-components"

export const TodoItem = styled.li<{ completed: boolean }>`
  display: flex;
  gap: 8px;
  font-size: 12px;
  font-weight: 400;
  padding: 8px 0 8px 0;
  transition: all 0.2s ease;
  border-radius: 8px;

  &:hover {
    background-image: linear-gradient(to left, #aed6f1, #fff);

    button {
      display: block;
    }
  }

  label {
    display: flex;
    width: calc(100% - 40px);
    min-height: 30px;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    .custom-checkbox {
      position: relative;
      display: inline-block;
      width: 18px;
      height: 18px;

      input[type="checkbox"] {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + .checkmark {
          background-color: #2196f3;
          border: 1px solid #2196f3;
        }
      }

      .checkmark {
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
      }
    }
  }

  ${(props) =>
    props.completed &&
    css`
      text-decoration: line-through;
      color: #aaa;
    `}
`

export const Remove = styled.button`
  display: none;
  width: 20px;
  height: 20px;
  font-size: 12px;
  border-radius: 4px;
  color: white;
  font-weight: 700;
  border: none;
  background-color: #ff7675;
  cursor: pointer;
  margin: auto 8px auto auto;
`
