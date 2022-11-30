import React from 'react'
import styled from 'styled-components'
function Item({ name, idx }) {
  return (
    <ItemStyled>
      <div className="number">
        <span>{idx}</span>
      </div>
      <div className="text">
        <span>{name}</span>
      </div>
    </ItemStyled>
  )
}

const ItemStyled = styled.div`
  display: flex;
  justify-content: left;
  gap: 8px;
  padding: 6px 8px;
  max-width: 100px;
  width: 100%;
  box-shadow: 0px 7px 32px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  cursor: pointer;
  .number {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #bbcffb;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    color: #04004d;
    font-size: 16px;
    font-weight: 400;
  }
`
export default Item
