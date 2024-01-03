import { useState } from 'react'
import FilterDropdown from './FilterDropdown'

type Filters = {
    type: boolean;
    brand: boolean;
    price: boolean;
    rating: boolean;
    [key: string]: boolean;
}

const Filter: React.FC = () => {
    const [filters, setFilters] = useState<Filters>({
        type: false,
        brand: false,
        price: false,
        rating: false
    });

    const handleClickExpand = (filterName: string) => {

        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName]
        }));

    }

    return( 
        
        <div className="container border border-gray-300 rounded-md w-1/3 h-fit ease-in-out duration-300">

            <div className="bg-gray-50 text-gray-600 text-2xl -mt-6 ml-5 w-fit p-2">
                Filter
            </div>


            {/* filter tags container */}
            <div className="mx-6 mb-5 text-md drop-shadow-xs">
                <div className="hover:cursor-pointer" onClick={() => handleClickExpand('type')}>
                    Type 
                    <span className="opacity-50 float-right text-right">{
                        filters.type ? "+" : "-" }
                    </span>
                    </div>

                {!filters.type && <FilterDropdown tags={["Electric Guitar", "Amplifiers", "Pedals"]} />}

                <div className="hover:cursor-pointer" onClick={() => handleClickExpand('brand')}>
                    Brand
                    <span className="opacity-50 float-right text-right">{
                        filters.brand ? "+" : "-" }
                    </span></div>

                {!filters.brand && <FilterDropdown tags={["Fender", "Squier", "Gibson", "Marshall", "Ibanez", "PRS", "Epiphone", "Gretsch", "Unlisted"]} />}

                <div>Price Range</div>

                <div className="hover:cursor-pointer" onClick={() => handleClickExpand('rating')}>
                    Rating
                    <span className="opacity-50 float-right text-right">{
                        filters.rating ? "+" : "-" }
                    </span></div>

                {!filters.rating && <FilterDropdown tags={["1+", "2+", "3+", "4+", "5"]} />}

            </div>
        </div>
    );
}

export default Filter;