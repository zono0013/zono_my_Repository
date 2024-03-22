import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <div className='Body'>
        <div className='leftbody'>
            <div className='name'>
                <ruby>
                仮屋薗
                <rt>かりやぞの</rt>
                　
                <rt></rt>
                純
                <rt>じゅん</rt>
                </ruby>
            </div>
            <div className='img'>
            <img className='img_in' src="https://th.bing.com/th/id/OIP.SPCOU0xr5I7bwfk1pn6R2AHaHa?rs=1&pid=ImgDetMain" alt="imgの代替テキスト">

            </img>

                
            </div>
        </div>
        <div className='rightbody'>
            <div className='in'>
                introduce
            </div>
        </div>
    </div>
  )
}

export default Body