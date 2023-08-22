import { useEffect, useState } from "react";
const useSpotify = () => {
  const CLIENT_ID = "58759f42dc2e44c3b4f0800fc87406d7";
  const CLIENT_SECRET = "29141e34f0fb483b963e279b9ebb8ea4";
    const getToken = "https://accounts.spotify.com/api/token";

    
    const [token, setToken] = useState('');
    const [searchKey, setSearchKey] = useState("");
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    let authParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: "grant_type=client_credentials&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET
    }
    useEffect(() => {
      async function getData() {
        setLoading(true)
        try {
          let response = await fetch(getToken, authParams);
          let data = await response.json()
          //console.log(data.access_token)
          setToken(data.access_token) 
          setError(null)
          setLoading(false)
        } catch (error) {
          console.error(error.message)
          setError(error.message)
          setLoading(false)
        }
      }

      getData()

    }, [])


    const searchArtist = async (e) => {
       e.preventDefault()
        console.log('searching for ' + searchKey)
        //Artist parameters
        let searchParams = {
          method: 'GET',
          headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
          }
        }
        //Search Artist based on id
        setLoading(true)
        try {
        let artistId = await fetch(`https://api.spotify.com/v1/search?q=${searchKey}&type=artist`, searchParams)
        .then(response => response.json()) 
          .then(data => { return data.artists.items[0].id })  
         console.log(artistId)
        //Albums
          let returnedAlbums = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`, searchParams)
          const data = await returnedAlbums.json();
          setAlbums(data.items)
          console.log(data)
        setError(null)
        setLoading(false)
        } catch(error) {
          console.log(error)
          setError(error)
          setLoading(false)
        }
    }
    console.log(albums)
    return { albums, setSearchKey, searchArtist, error, loading}
}
 
export default useSpotify;
