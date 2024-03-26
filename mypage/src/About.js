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
                    <img className='img_in' src="https://media.discordapp.net/attachments/1097827372184649739/1221638989690437764/IMG_3303.jpg?ex=66134ef8&is=6600d9f8&hm=22469c47cb467c6959a5ed725d0aae35af180861b7dc9762cb6c511866089cd7&=&format=webp&width=655&height=655" alt="imgの代替テキスト" />
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
                        好きな事・物：ラーメン<br></br>
                        　　　　　　　MMORPG<br></br>
                        　　　　　　　新しいことをする事<br></br>
                        <br></br>
                        趣味：ランニング<br></br>
                        　　　コーディング<br></br>
                        　　　偶にゲーム<br></br>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default About;
