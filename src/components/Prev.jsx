import React from 'react'

const Prev = ({counter,setCounter}) => {
  return (
    <button 
        onClick={() => {
            setCounter(counter-1)
        }}
        disabled={counter===1}
        className='button-40'
    >
        Prev
    </button>
  )
}

export default Prev