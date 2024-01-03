import React from 'react'
import { Link } from 'react-router-dom'
import HomeCard from '../components/HomeCard'

const Home: React.FC = () => {
    return(
        <>
        <div className="flex flex-col justify-center align-middle items-center">

                {/* initial banner */}
                <div className="container flex flex-row my-8 justify-center align-middle items-center space-x-5">

                    <div>
                        <img src="https://blush.design/api/download?shareUri=cS3vbnf1rzd9_H-H&c=Skin_0%7Ef7d3bb-0.2%7Ec68e80&w=800&h=800&fm=png"/>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-2xl font-bold my-2 w-4/5">
                            Our database offers catalogues for all of your guitar needs
                        </div>
                        <div className="text-sm text-gray-600 mb-5">
                            Find the equipment you're looking by filtering through top name-brands, 
                            <br></br>prices, type of equipment, and even user ratings.
                        </div>
                        <Link to="/search" className="w-fit">
                            <button className="rounded bg-blue-600 py-2 px-4 text-white w-fit hover:bg-blue-700">
                                See Equipment →
                            </button>
                        </Link>
                    </div>
                </div>

                {/* brands go here? */}
                <div className="container my-8 bg-gray-100 w-screen p-5 flex flex-col justify-center align-middle items-center " >
                    <div className="text-xl font-light py-5">
                        Check equipment from major brands here:
                    </div>
                    <div className="flex flex-row flex-wrap overflow-hidden space-x-5 mt-2 mb-5">
                    {/* brand icon show a lot of buttons */}
                        <HomeCard photoURL="https://cdn.freebiesupply.com/logos/large/2x/fender-3-logo-png-transparent.png" />
                        <HomeCard photoURL="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Ibanez_logo.svg/2560px-Ibanez_logo.svg.png" />
                        <HomeCard photoURL="https://upload.wikimedia.org/wikipedia/commons/6/6e/Prs_guitars_logo.png" />
                        <HomeCard photoURL="https://1000logos.net/wp-content/uploads/2020/06/Yamaha-Logo.png" />
                   </div>
                </div>

                {/* maybe have a infographic with the sides of the instruments and what they do */}


                <div className="container">

                    <div></div>

                </div>
            </div>
        </>
    )
}

export default Home;