import React, { useState } from 'react';
import './About.css';

const About = () => {
    return (
        <div className='About'>
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
                    <img className='img_in' src="https://th.bing.com/th/id/OIP.SPCOU0xr5I7bwfk1pn6R2AHaHa?rs=1&pid=ImgDetMain" alt="imgの代替テキスト" />
                </div>
            </div>
            <div className='rightbody'>
                <div className='in'>
                    <pre>
                        大学：立命館大学 <br></br>
                        　　　情報理工学部 情報理工学科 <br></br>
                        　　　実世界情報コース<br></br>
                        <br></br>
                        所属団体：RCC(立命館コンピュータクラブ)<br></br>
                        　　　　　RAC(立命館陸上サークル)<br></br>
                        <br></br>
                        趣味：<br></br>
                        <br></br>
                        

                    </pre>
                </div>
            </div>
        </div>
    );
};

export default About;
