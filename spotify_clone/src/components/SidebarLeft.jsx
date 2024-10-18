import React from 'react'
import {assets} from "../assets/assets.js";
import {useNavigate} from "react-router-dom";

const SidebarLeft = () => {

    const navigate = useNavigate()

    return (
        <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
            <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
                <div onClick={() => navigate("/")} className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className="w-6" src={assets.home_icon} alt="Home button"/>
                    <p className="font-bold">Home</p>
                </div>
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className="w-6" src={assets.search_icon} alt="Search button"/>
                    <p className="font-bold">Search</p>
                </div>
            </div>
            <div className="bg-[#121212] h-[85%] rounded">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img className="w-8" src={assets.stack_icon} alt="Stack Icon"/>
                        <p className="font-semibold">Your Library</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className="w-5" src={assets.arrow_icon} alt="Arrow"/>
                        <img className="w-5" src={assets.plus_icon} alt="Plus"/>
                    </div>
                </div>
                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start
                justify-start gap-1 pl-4">
                    <h1 className="font-bold">Create your first Playlist</h1>
                    <p className="font-light opacity-70">Choose your Music and the Vibe</p>
                    <button
                        className="px-5 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer">Create
                        Playlist
                    </button>
                </div>

                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start
                justify-start gap-1 pl-4 mt-4">
                    <h1 className="font-bold">Follow a Podcast</h1>
                    <p className="font-light opacity-70">Start the day with a Podcast</p>
                    <button
                        className="px-5 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer">Browse Podcast
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SidebarLeft

