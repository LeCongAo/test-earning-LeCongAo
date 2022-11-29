import React from 'react'

function Home(props) {
  const listArr = [
    {
      index: '0',
      name: 'ao',
    },
    {
      index: '1',
      name: 'ao1',
    },
    {
      index: '2',
      name: 'ao2',
    },
    {
      index: '3',
      name: 'ao3',
    },
    {
      index: '4',
      name: 'ao4',
    },
  ]

  const myRandom = () => {
    return Math.round(Math.random() * listArr.length)
  }

  const myFind = (arrItems, itemRandom) => {
    for (let index = 0; index < arrItems.length; index++) {
      if (Number(arrItems[index]?.index) === Number(itemRandom)) {
        console.log('dug')
        return arrItems[index]?.index
      }
    }
  }

  const getRandomItems = (arrItems) => {
    const newArr = []
    for (let i = 0; i < arrItems.length; i++) {
      let finalRandom = undefined
      while (finalRandom === undefined) {
        const randomIndex = myRandom()
        const randomArr = arrItems[randomIndex]?.index
        const findItems = myFind(newArr, randomArr)

        if (findItems === undefined) {
          console.log('sai', findItems)
          finalRandom = randomIndex
        }
      }
      newArr.push(finalRandom)
    }

    return newArr
  }

  console.log('getRandomItems', getRandomItems(listArr))
  return <div></div>
}

export default Home
