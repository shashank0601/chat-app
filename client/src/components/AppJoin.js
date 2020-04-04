import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const AppJoin = () =>{
    const [user,setUser] = useState('');
    const [room,setRoom] = useState('');
    return(
        <div className='outerContainer'>
            <div className='innerContainer'>
                <h1 className='heading'>Join</h1>
                <div><input placeholder='' className='input' type='text' onChange={} /></div>
                <div><input placeholder='' className='input' type='text' onChange={} /></div>
                <Link>
                    <button className='button' type='submit'>Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default AppJoin;