import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav className="container mx-auto drop-shadow-xs">
            <ul className="flex flex-row space-x-16 text-md my-5 text-xl">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/search" className="flex items-center">Equipment <FontAwesomeIcon className="text-sm my-0 ml-2" icon={faChevronDown} /></Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;