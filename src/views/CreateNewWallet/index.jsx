import React from 'react'
import styled from 'styled-components'
import ButtonCustom from '../../components/ButtonCustom'
import CopyText from '../../components/CopyText'
import Item from '../../components/Item'

function PageWallet({ arr24Items, handSetInterVal, isClass, count }) {
  return (
    <PageWalletStyled>
      <div className="link">
        <a href="/">Auto Gen Seed Phrase?</a>
      </div>
      <div className="content__items">
        {arr24Items.map((item, idx) => (
          <Item name={item.name} idx={item.index} key={idx} />
        ))}
      </div>
      <CopyText
        contentText="Tap to Copy or Carefully write down your seed phrase and store it in a
        safe place"
        onClick={handSetInterVal}
      />

      <div className="content__bottom">
        <div className="text__button">
          <span>How does this work?</span>
          <img src="./images/arrow-right.svg" alt="icon" />
        </div>
        <ButtonCustom>Next</ButtonCustom>
      </div>
      <div
        className={isClass ? 'saved__clipboard active' : 'saved__clipboard '}
      >
        <div className="icon__down">
          <img src="./images/down.svg" alt="icon" />
        </div>
        <img src="./images/saved-copy.svg" alt="icon" />
        <div className="text">
          <p>Saved to clipboard</p>
        </div>
        <div className="count__rotate">
          {count}
          <img src="./images/rotate-icon.svg" alt="icon" />
        </div>
      </div>
    </PageWalletStyled>
  )
}
const PageWalletStyled = styled.div``
export default PageWallet
