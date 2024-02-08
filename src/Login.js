import React from 'react';
import './Login.css';
import spotifyImage from './spotify.png';

function Login() {
  return (
    <div className='Login'>
      
      <img src={spotifyImage} alt='Spotify Logo' />

      <a> Login with Spotify</a>
    </div>
  );
}

export default Login;
