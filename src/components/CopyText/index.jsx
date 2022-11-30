import React from 'react'
import styled from 'styled-components'

function CopyText({ contentText, onClick }) {
  return (
    <CopyTextStyled>
      <span>{contentText}</span>
      <img src="./images/copy-icon.svg" alt="copy" onClick={onClick} />
    </CopyTextStyled>
  )
}
const CopyTextStyled = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  padding: 26px 10px 40px 10px;
  img {
    cursor: pointer;
  }
`
export default CopyText
