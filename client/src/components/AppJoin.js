import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../index.css';

export default function AppJoin() {
  const [name, setName] = useState('');
  const [chatroom, setChatroom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join a Chatroom</h1>
        <div>
          <input placeholder="name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="chatroom" className="joinInput mt-20" type="text" onChange={(event) => setChatroom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !chatroom) ? e.preventDefault() : null} to={`/chat?name=${name}&chatroom=${chatroom}`}>
          <button className={'button mt-20'} type="submit">Join</button>
        </Link>
      </div>
    </div>
  );
}
