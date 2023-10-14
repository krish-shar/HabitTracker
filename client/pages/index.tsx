import React, {useEffect, useState} from 'react'

function index() {

  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch('http://localhost:8080/api/home').then(
        (res) => res.json()
    ).then(
        (res) => setMessage(res.message)
    )
  }, [])



  return (
    <div>{message}</div>
  )
}

export default index