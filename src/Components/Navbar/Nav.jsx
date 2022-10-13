import './Nav.css'
import logobnb from './assets/580b57fcd9996e24bc43c513.png'
function Navbar(){
    return(
        <nav>
            <img src={logobnb} alt="sscasc" className="nav--logo" />
        </nav>
    )
}
export default Navbar