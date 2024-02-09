import React from 'react';
import './Login.css';
import spotifyImage from './spotify.png';
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className='login'>
      <img src={spotifyImage} alt='Spotify Logo' />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
