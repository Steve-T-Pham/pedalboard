import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul className="flex flex-row space-x-16 text-md my-5 mx-2 text-xl ml-20">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/search">Equipment</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;