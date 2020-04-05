import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';

import '../index.css';

const InfoTag = ({ chatroom }) => (
  <div className="infoTag">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{chatroom}</h3>
    </div>
    <div className='rightInnerContainer'>
      <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoTag;