import React from 'react'
import Navbar from "./Navbar.jsx";
import { albumsData } from "../assets/assets.js";
import MusicAlbum from "./MusicAlbum.jsx";
import { songsData } from "../assets/assets.js";
import Songs from "./Songs.jsx";

const DisplayHome = () => {
    return (
        <>
            <Navbar/>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (
                        <MusicAlbum
                            key={index}
                            name={item.name}
                            desc={item.desc}
                            id={item.id}
                            image={item.image}
                        />))}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Stay Up-to-date</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item, index) => (
                        <Songs
                        key={index}
                        name={item.name}
                        desc={item.desc}
                        id={item.id}
                        image={item.image}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
export default DisplayHome
