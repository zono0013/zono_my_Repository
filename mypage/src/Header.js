import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='header'>
      <h1>
        <a href='#'>ZONO Code</a>
      </h1>
      <div className='buttoms'>
        <button>
            ABOUT
        </button>
        <button>
            Portfolio
        </button>
        <button>
            Game Play
        </button>
        <button>
            SNS
        </button>
      </div>
      
    </div>
  )
}

export default Header