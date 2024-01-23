import React from 'react'
import { useState } from 'react'
import SearchCard from '../components/SearchCard'
import Filter from '../components/Filter'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import api from '../services/api'

const Search: React.FC = () => {

    const [search, setSearch] = useState('');

    const {data: equipment} = useQuery('equipment', async () => {
        const response = await api.getAllEquipment();
        return response.data;
    })

    return(
            <div className="container mx-auto flex flex-col mt-5">


                {/* turn this into its own reusable navigation component for current pages, also make the placeholder float up to top to match filter? */}
                <div className="text-sm drop-shadow-xs"> 
                    <Link to="/" className="text-gray-400 hover:underline">Home</Link>  
                    &nbsp;&gt;&nbsp;Search 
                </div>
                
                <div className="mt-3 mb-8 text-lg">
                    Type the name, brand, or model of the guitar equipment you are searching for into the search bar.
                </div>

                {/* container for left (filter applicators) and right ui (equipment)*/}
                <div className="container flex flex-row space-x-10">
                    
                    <div className="flex flex-col w-1/3">
                        <input autoFocus 
                                className="mb-5 p-2 w-full border border-gray-300 rounded-md py-2 px-4 "  
                                placeholder="Type here.." 
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                        <Filter />
                    </div>
                        
                    <div className="container">



                        <div className="container grid grid-cols-4 gap-y-8 mx-auto">

                            {!search ? equipment?.map(item => 
                                {return <SearchCard 
                                            key={item.id} 
                                            id={item.id}
                                            name={item.name} 
                                            type={item.type} 
                                            desc={item.description} 
                                            photoURL={item.picture_url} 
                                            brand={item.brand} 
                                            model={item.model}/>})
                                            : 
                            equipment?.filter(item => 
                                item.name.toLowerCase().includes(search.toLowerCase())).map(item => 
                                {return <SearchCard key={item.id} 
                                            id={item.id}
                                            name={item.name} 
                                            type={item.type} 
                                            desc={item.description} 
                                            photoURL={item.picture_url} 
                                            brand={item.brand} 
                                            model={item.model}/>})}
                        </div>
                    </div>
                </div>

            </div>
    );
}

export default Search;