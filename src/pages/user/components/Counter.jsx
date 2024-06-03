import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(1)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div className="flex items-center w-fit h-fit border border-gray-200 text-sm font-medium">
      <button 
        className="decrement-btn px-2 py-1 border-gray-200 border-r" 
        onClick={handleDecrement}
      >
        -
      </button>
      <div className="count-display py-1 px-2">
        {count}
      </div>
      <button 
        className="increment-btn px-2 py-1 border-gray-200 border-l" 
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  )
}

export default Counter
