import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../index.css';


const AppJoin = () =>{
    const [name,setName] = useState('');
    const [chatroom,setChatroom] = useState('');
    return(
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join a Chatroom</h1>
                <div>
                    <input placeholder='name' className='joinInput' type='text' onChange={(event)=>setName(event.target.value)} />
                </div>
                <div>
                    <input placeholder='chatroom' className='joinInput mt-20' type='text' onChange={(event)=>setChatroom(event.target.value)} />
                </div>
                <Link onClick={event => (!name || !chatroom) ? event.preventDefault():null} to={`/chat?name=${name}&chatroom=${chatroom}`}>
                    <button className='button mt-20' type='submit'>Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default AppJoin;