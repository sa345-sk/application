import useSpotify from "./useSpotify";
const Navbar = () => {
    const { CLIENT_ID, authorize, response, redirect, token, logout } = useSpotify();
    return ( 
    <div className="navbar">
        <nav>
            <h1>Skylyte Spotify api</h1>
            <div className="links">
                    {!token ? <a href={`${authorize}?client_id=${CLIENT_ID}&redirect_uri=${redirect}&response_type=${response}`}>Login to your Spotify account</a> : <button onClick={logout}>Logout</button>}
            </div>
        </nav>    
    </div> 
    );
}
 
export default Navbar;