import styled from "styled-components"

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    font-size: 14px;
    font-weight: 400;
    transition: all 0.2s ease;

    &:hover {
      background-color: #ccc;
    }

    button {
      background-color: transparent;
      width: 100%;
      padding: 8px 0 8px 32px;
      text-align: left;
      border: none;
      cursor: pointer;
    }
  }
`
