import React from 'react'
const Works = ({ onButtonClick }) => {
  return (
    <div>
        <h1>
            works
        </h1>
        <div className='works'>
            <div className='element'>
                  <div className='imgs' onClick={() => onButtonClick('Jump')}>
                    <img src='https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/j/jump-king-switch/hero'></img>
                </div>
                title：イラストやでJumpKing
                <br></br>
                使用技術：Java(Android Studio)
            </div>
            <div className='element'>
                2
            </div>
            <div className='element'>
                3
            </div>
            <div className='element'>
                4
            </div>
            <div className='element'>
                5
            </div>
            <div className='element'>
                6
            </div>
            <div className='element'>
                7
            </div>
            <div className='element'>
                8
            </div>
        </div>
    </div>
  )
}

export default Works