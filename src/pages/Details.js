import React from 'react'
import { useParams } from 'react-router-dom'
import contents from '../fakedb'

function Details() {

    const { id } = useParams()


    const info = contents.find((a => a?.id == id))


  return (
    <div >
        <h1 className="text-center">{info?.title}</h1>
        <p  className="text-primary fs-italic">{info?.description}</p>
        <img src={info.image} alt="" />
    </div>
  )
}

export default Details