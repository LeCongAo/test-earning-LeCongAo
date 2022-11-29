import React, { useEffect, useState } from 'react'

function Home(props) {
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

  const [getArrApi, setGetArrApi] = useState([])

  useEffect(() => {
    ;(async () => {
      await fetch('https://metanode.co/json/eng.json')
        .then((data) => data.json())
        .then((data) => {
          setGetArrApi(data)
        })
        .catch((err) => {
          console.log('err', err)
        })
    })()
  }, [])

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

  const arr24Items = getRandom24Items(getArrApi)

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

  const arr18Items = getRandom18Items(arr24Items)

  // const get16Items = (arrItems) =>{
  //   const newArr = []
  //   for(let i = 0;i < arrItems.length; i++){

  //   }
  // }

  // get16Items(arr18Items)
  // console.log('arr18Iems', arr18Items)

  return <div></div>
}

export default Home
