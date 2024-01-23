import { Link } from 'react-router-dom';

type SearchCardProps = {
    id: number;
    name: string;
    photoURL?: string;
    type: string;
    desc?: string;
    brand?: string;
    model?: string;
}

const SearchCard: React.FC<SearchCardProps> = ({ id, type, photoURL, desc, brand, model }) => {
    return(

        <Link to={`/equipment/${type}/${id}/${model}`} className="block w-11/12 h-[25rem] mx-auto">
            <div className="container flex flex-col bg-white drop-shadow-sm shadow-sm rounded-lg h-full items-center justify-center overflow-hidden border-transparent border hover:border-gray-300">

                <div className="container h-4/5 w-4/5 rounded-lg mt-5 mb-2 overflow-hidden">
                    <img className="object-cover h-full w-full" src={photoURL}/>
                </div>

                <div className="container flex flex-col w-4/5 mb-5 h-[6rem]">
                    <div className="text-lg font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">{model}</div>
                    <div className="text-xs text-gray-500 mb-1">{brand}&nbsp;•&nbsp;{type}</div>
                    <div className="text-sm text-gray-800 line-clamp-2 overflow-hidden overflow-ellipsis">{desc}</div>
                </div>
            </div>
        </Link>
    );
}

export default SearchCard;