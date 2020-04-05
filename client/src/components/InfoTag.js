import React from 'react';
import '../index.css';
import closeIcon from '../icons/closeIcon.png';
import onlineIcon from '../icons/onlineIcon.png';

const InfoTag = ({chatroom}) =>(
    <div className='infoTag'>
        <div className='leftInnerContainer'>
            <img className='onLineIcon' src={onlineIcon} />
            <h3 style={{padding:'10px'}}>{chatroom}</h3>
        </div>
        <div className='rightInnerContainer'>
            <a href="/"><img src={closeIcon} alt='Close Image'/></a>
        </div>
    </div>
)

export default InfoTag;