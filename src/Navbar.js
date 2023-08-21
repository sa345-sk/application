import spotify from './logo1.png'
const Navbar = () => {
    return ( 
    <div className="navbar">
        <nav>
            <h1>Skylyte Spotify api</h1>
            <img src={spotify} alt="" />
        </nav>    
    </div> 
    );
}
 
export default Navbar;