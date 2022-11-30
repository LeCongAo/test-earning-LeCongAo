import React, { useEffect, useState } from 'react'

function useGetData() {
  const [data, setData] = useState([])

  useEffect(() => {
    ;(async () => {
      await fetch('https://metanode.co/json/eng.json')
        .then((data) => data.json())
        .then((data) => {
          setData(data)
        })
        .catch((err) => {
          console.log('err', err)
        })
    })()
  }, [])

  return data
}

export default useGetData
