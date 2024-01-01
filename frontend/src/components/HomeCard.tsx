import { Link } from 'react-router-dom';

type HomeCardProps = {
    photoURL: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ photoURL }) => {
    return(
        <Link to={`equipment`}>
            <div className="container flex items-center justify-center overflow-hidden object-cover rounded border-2 border-gray-200 w-64 h-32 hover:border-blue-600 cursor-pointer">
            <div className="object-cover overflow-hidden px-7">
                    <img src={photoURL} />
                </div> 
            </div>
        </Link>
    );

}

export default HomeCard;