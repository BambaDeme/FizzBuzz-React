import React from 'react'

const Reset = ({counter,setCounter}) => {
  return (
    <button
        onClick={() => setCounter(1)}
        className='button-40'
    >
        Reset
    </button>
  )
}

export default Reset