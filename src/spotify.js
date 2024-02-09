export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3002/"; 

const clientId = "a82199fef3514db59d60ff4127b2a63b";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-rated",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`; 

