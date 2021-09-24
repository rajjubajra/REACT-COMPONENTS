import React from 'react'


function CompTitle({name}) {
  return (
    <div className="flex justify-between w-full max-w-screen-xl m-auto p-10">
      <h2 className="text-xl">{name}</h2>
    </div>
  )
}

export default CompTitle
