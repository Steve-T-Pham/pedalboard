import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/equipment">Equipment</Link>
                    <ul>
                        <li>
                            <Link to="/equipment/guitars">Electric Guitars</Link>
                        </li>
                        <li>
                            <Link to="/equipment/amps">Amps</Link>
                        </li>
                        <li>
                            <Link to="/equipment/pedals">Pedals</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;