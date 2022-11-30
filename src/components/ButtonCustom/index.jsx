import React from 'react'
import styled from 'styled-components'

function ButtonCustom({ children }) {
  return <ButtonCustomStyled>{children}</ButtonCustomStyled>
}
const ButtonCustomStyled = styled.div`
  background: #004dff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 12px;
  gap: 10px;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  color: #fff;
  max-width: 335px;
  max-height: 56px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
`
export default ButtonCustom
