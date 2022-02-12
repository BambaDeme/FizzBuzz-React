import React from 'react'

const Next = ({counter,setCounter}) => {
  return (
    <button 
        onClick={() => {
            counter === 100 ? setCounter(1) : setCounter(counter+1)
        }}
        disabled={counter===100}

        className='button-40'
    >
        Next
    </button>
  )
}

export default Next