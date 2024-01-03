import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav className="container mx-auto drop-shadow-xs">
            <ul className="flex flex-row space-x-16 text-md my-5 text-xl">
                <li>
                    <Link className="hover:text-gray-500" to="/">Home</Link>
                </li>
                <li>
                    <Link className="flex items-center hover:text-gray-500" to="/search" >Equipment <FontAwesomeIcon className="text-sm my-0 ml-2" icon={faChevronDown} /></Link>
                </li>
                <li>
                    <Link className="hover:text-gray-500" to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;