import styled from "styled-components"

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  transition: all 0.2s ease;
  gap: 12px;
  border-radius: 8px;
  min-height: 46px;

  div {
    min-width: 45px;
    text-align: center;
  }

  &:hover {
    background-image: linear-gradient(to left, #aed6f1, #fff);

    button {
      display: block;
    }
  }
`

export const Button = styled.button`
  background-color: transparent;
  width: 100%;
  padding: 16px 0;
  text-align: left;
  border: none;
  cursor: pointer;
  font-weight: 500;
`

export const Remove = styled.button`
  font-size: 10px;
  border-radius: 4px;
  color: white;
  font-weight: 700;
  border: none;
  background-color: #ff7675;
  cursor: pointer;
`

export const TodosQuantity = styled.span`
  font-size: 10px;
  font-weight: 500;
  padding: 4px;
  background-color: #ccc;
  color: #333;
  margin: 0 4px;
  border-radius: 50%;
`

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  font-weight: 500;
`
