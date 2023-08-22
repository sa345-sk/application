import useSpotify from './useSpotify';
import Home from './Home';
const Check = () => {
    const { albums, setSearchKey, searchArtist, error, loading } = useSpotify()
    return ( 
       <div className='check'>
           {error && <div className='div'>{error.message}</div>}
            {loading && <div className='div'>LOADING....</div>}
           {albums && <Home albums={albums} setSearchKey={setSearchKey} searchArtist={searchArtist}/>}
       </div>
     );
}
 
export default Check;