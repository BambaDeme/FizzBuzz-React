import React from 'react'

const FizzBuzz = ({counter,setCounter}) => {
  return (
    <div className='container'>
        <div className='count'>
            {counter}
        </div>
        <button onClick={() => setCounter(count +1)}>-</button>
        <button onClick={() => setCounter(count-1)}>-</button>
    </div>
  )
}

export default FizzBuzz