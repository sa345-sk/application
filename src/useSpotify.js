import { useEffect, useState } from "react";
import axios from "axios";
const useSpotify = () => {
    const CLIENT_ID = "58759f42dc2e44c3b4f0800fc87406d7";
    //const CLIENT_SECRET = "49e5222d12eb4e1cac2f075d117acf54";
    const authorize = 'https://accounts.spotify.com/authorize';
    //const token = "https://accounts.spotify.com/api/token";
    const response = "token";
    const redirect = 'http://localhost:3000';
    
    const [token, setToken] = useState('');
    const [searchKey, setSearchKey] = useState(null);
    const [artist, setArtist] = useState(null)
    useEffect(() => {
      const hash = window.location.hash;
      let token = window.localStorage.getItem('token');

      if(!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split('=')[1];

        console.log(token);
        window.location.hash = "";
        window.localStorage.setItem('token', token);
      }
        setToken(token);
        console.log(token)
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem('token')
    };

    const searchArtist = async (e) => {
       e.preventDefault()
       const data = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
         Authorization: `Bearer${token}`
       }, params: {
          q: searchKey,
          type: 'artist'
       }})
        console.log(data)
        setArtist(data.artists.items)       
    }
 
    return {CLIENT_ID, authorize, response, redirect, token, logout, setSearchKey, searchArtist, artist}
}
 
export default useSpotify;