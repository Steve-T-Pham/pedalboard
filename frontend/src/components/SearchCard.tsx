import { Link } from 'react-router-dom';

type SearchCardProps = {
    name: string;
    photoURL: string;
    type: string;
    desc: string;
    price: number;
}

const SearchCard: React.FC<SearchCardProps> = ({ name, type, photoURL }) => {
    return(

        <Link to="/search/:id">
            <div className="container flex flex-col drop-shadow-sm rounded-lg w-11/12 h-80 items-center justify-center overflow-hidden border-transparent border hover:border-gray-300">

                <div className="container h-4/5 w-4/5 rounded-lg mt-5 mb-2 overflow-hidden">
                    <img className="object-cover h-full w-full" src={photoURL}/>
                </div>

                <div className="container flex flex-col w-4/5 mb-5">
                    <div className="text-lg font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">{name}</div>
                    <div className="text-xs text-gray-800">{type}</div>
                    <div className="text-xs text-gray-800">description words go here....</div>
                    <div className="text-xs text-gray-800"> $$$</div>
                </div>

            </div>
        </Link>
    );
}

export default SearchCard;