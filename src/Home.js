import { Link } from "react-router-dom";
const Home = ({ albums, setSearchKey, searchArtist }) => {
    return (
        <div className="home">
            <h2>Spotify api search for any artist that you know</h2>
            <form className="search" onSubmit={searchArtist}>
                <input type="text" placeholder="Search for an artist" onChange={e => setSearchKey(e.target.value)}/>
                <button type={`submit`}>Search</button> 
            </form>
            <div className="album">
              {albums.map((album, i) => {
                return (
                    <Link to={album.external_urls.spotify} key={album.id} target="_blank">
                        <div>
                            <img src={album.images[0].url} alt="" />
                            <p>{album.name}</p>                        
                        </div>
                    </Link>
                )
              })}
            </div>
        </div>);
}

export default Home;