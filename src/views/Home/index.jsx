import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import useGetData from '../../hook'
import PageWallet from '../CreateNewWallet'

// Cau 1 Hãy viết hàm sắp xếp mãng số bên DƯới để ra ĐƯợc số lớn nhất

const listArr2 = [1, 52, 6, 31]
const maxNumberInArr = (arr) => {
  const sortArr = arr.sort((a, b) => {
    const numberArrA = a.toString().split('')
    const numberArrB = b.toString().split('')
    for (let index = 0; index < listArr2.length; index++) {
      const numberA = numberArrA[index]
      const numberB = numberArrB[index]
      if (numberA - numberB !== 0) {
        return numberB - numberA
      }
    }
  })

  return sortArr.join('')
}
maxNumberInArr(listArr2)

// cau 2
const myRandom = (arrRandom) => {
  return Math.round(Math.random() * (arrRandom.length - 1))
}

const findIndex = (arrItems, itemRandom) => {
  for (let index = 0; index < arrItems.length; index++) {
    if (arrItems[index] === itemRandom) {
      return arrItems[index]
    }
  }
}

const getRandom24Items = (arrItems) => {
  const newArr = []
  for (let i = 0; i < 24; i++) {
    let finalRandom = undefined
    while (finalRandom === undefined) {
      const randomIndex = myRandom(arrItems)
      const randomArr = arrItems[randomIndex]
      const findItems = findIndex(newArr, randomArr)
      if (findItems === undefined) {
        finalRandom = randomIndex
      }
    }
    newArr.push({
      index: i,
      name: arrItems[finalRandom],
    })
  }
  return newArr
}

const getRandom18Items = (arrItems) => {
  const newArr = []
  for (let i = 0; i < 18; i++) {
    let finalRandom = undefined

    while (finalRandom === undefined) {
      const randomIndex = myRandom(arrItems)
      const randomArr = arrItems[randomIndex]

      const findItems = findIndex(newArr, randomArr)
      if (findItems === undefined) {
        finalRandom = randomIndex
      }
    }
    newArr.push(arrItems[finalRandom])
  }
  return newArr
}

const Arr6Items = (arrList) => {
  const newArr = []
  for (let index = 0; index < 6; index++) {
    newArr.push({
      list: arrList.slice(index * 3, (index + 1) * 3),
      primary: arrList[index * 3].index,
    })
  }
  return newArr
}

function Home() {
  // cau 2
  const GetData = useGetData()
  const arr24Items = useMemo(() => getRandom24Items(GetData), [GetData])
  const arr18Items = useMemo(() => getRandom18Items(arr24Items), [arr24Items])
  const arr6Items = useMemo(() => Arr6Items(arr18Items), [arr18Items])

  const [isClass, setClass] = useState(false)
  const [count, setCount] = useState(2)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count <= 0) {
        return () => {
          clearInterval(interval)
        }
      } else {
        setCount((cd) => cd - 1)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [isClass, count])

  const handSetInterVal = async (contentText) => {
    setClass(true)
    setCount(2)
    const interval = await setInterval(() => {
      setClass(false)
      if (navigator.clipboard) {
        navigator.clipboard.writeText(contentText)
      }
    }, 3000)
    return () => clearInterval(interval)
  }

  return (
    <HomeStyled>
      <div className="container">
        <div className="back__item">
          <img src="./images/back.svg" alt="back" />
          <span> Create New Wallet</span>
        </div>
        <PageWallet
          arr24Items={arr24Items}
          handSetInterVal={() => handSetInterVal()}
          isClass={isClass}
          count={count}
        />
        <div className={isClass ? 'bg__content active' : 'bg__content '}></div>
      </div>
    </HomeStyled>
  )
}
const HomeStyled = styled.div`
  font-weight: 400;
  font-size: 16px;
  .container {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    padding-top: 20px;
    position: relative;
  }
  .back__item {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    img {
      margin-right: 10px;
    }
  }
  .link {
    padding: 16px 0px;
    text-align: left;
    a {
      text-decoration: none;
      font-size: 18px;
      font-weight: 500;
      color: #004dff;
    }
  }
  .content__items {
    display: grid;
    width: 100%;
    grid-template-columns: 33% 33% 33%;
    gap: 16px;
  }
  .content__bottom {
    background: #fff;
    padding: 24px 20px 36px 20px;
    box-shadow: 0px -7px 64px rgba(0, 0, 0, 0.07);
    .text__button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      font-weight: 500;
    }
  }
  .saved__clipboard {
    text-align: center;
    background: #fff;
    padding: 0px;
    color: #04004d;
    font-size: 22px;
    font-weight: 700;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
    border-radius: 16px 16px 0px 0px;
    position: absolute;
    height: 0px;
    bottom: -100%;
    width: 100%;
    z-index: 2;
    transition: ease all 0.5s;
    overflow: hidden;
    &.active {
      bottom: 0px;
      height: 280px;
      padding: 10px 0px 35px 0px;
    }
    .icon__down {
      padding-bottom: 25px;
    }
  }
  .bg__content {
    position: absolute;
    width: 100%;
    background: #0b0b0b8c;
    height: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 1;
    transition: ease all 0.5s;
    overflow: hidden;
    &.active {
      height: 100%;
    }
  }
  .count__rotate {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    img {
      animation: rotate 1s linear infinite;
      position: absolute;
    }
  }
`

export default Home
