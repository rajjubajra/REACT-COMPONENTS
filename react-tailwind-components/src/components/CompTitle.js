import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-router-dom';

function CompTitle({title}) {
  return (
    <div className="flex justify-between w-full max-w-screen-xl m-auto p-10">
      <h2 className="text-2xl">{title}</h2>
      <div><Link to="/"><AiOutlineClose /></Link></div>   
    </div>
  )
}

export default CompTitle
