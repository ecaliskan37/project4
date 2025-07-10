import React, { useEffect, useState } from 'react'

const DataShow = () => {
  const [list, setList] = useState([])
  const [button, setButton] = useState(0)

  useEffect(() => {
    async function getData() {
      const url = `https://jsonplaceholder.typicode.com/todos/${button}`
      const response = await fetch(url, {
        'Access-Control-Allow-Origin': url,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Origin, X-Auth-Token, Authorization',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS,DELETE',
        'Content-Type': 'application/json,text/html; charset=UTF-8',
      })

      const data = await response.json()
      setList([data])
    }
    if (button !== 0) {
      getData()
    }
  }, [button])

  //   const result = await axios
  //     .get('api')
  //     .then((item) => {

  //     })
  // }

  console.log(list)

  return (
    <div className="box">
      <button
        style={{ backgroundColor: 'lightgrey' }}
        onClick={() => {
          setButton((x) => x + 1)
        }}
      >
        New Quote
      </button>
      {list.map((item, index) => {
        return (
          <div
            key={index}
            style={{ fontWeight: 'bold', backgroundColor: 'white' }}
          >
            <p
              style={{ fontWeight: 'bold', backgroundColor: 'white' }}
            >{`"${item?.title}`}</p>
            <p
              style={{ fontWeight: 'bold', backgroundColor: 'white' }}
            >{`-${item?.id}`}</p>
          </div>
        )
      })}
    </div>
  )
}
export default DataShow
