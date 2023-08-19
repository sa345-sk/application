import useSpotify from "./useSpotify";
const Home = () => {
    const { token, setSearchKey, searchArtist } = useSpotify()
    return (
        <div className="home">
            {token && <h2>Spotify api search for any artist that you know</h2>}
            {token ? <form className="search" onSubmit={searchArtist}>
                <input type="text" placeholder="Search for an artist" onChange={e => setSearchKey(e.target.value)}/>
                <button type={`submit`}>Search</button> 
            </form> : <h3>Please Login!</h3>}
        </div>);
}

export default Home;