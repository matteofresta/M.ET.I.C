// src/components/DisplayAlbum.jsx

import React, { useContext } from 'react';
import Navbar from './Navbar.jsx';
import { useParams } from 'react-router-dom';
import { albumsData, songsData, assets } from '../assets/assets.js';
import { PlayerContext } from '../context/PlayerContext.jsx';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData.find((album) => album.id === parseInt(id));

    // Überprüfe, ob das Album existiert
    if (!albumData) {
        return (
            <div>
                <Navbar />
                <div className="text-white p-8">
                    <h1>Album nicht gefunden</h1>
                </div>
            </div>
        );
    }

    const { playWithId } = useContext(PlayerContext);

    // Filtere die Songs, die zu diesem Album gehören
    const playlistSongs = songsData.filter((song) => song.albumId === albumData.id);

    return (
        <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen text-white">
            {/* Navbar */}
            <Navbar />

            {/* Album Header */}
            <div className="mt-10 flex flex-col md:flex-row items-center md:items-end px-8">
                <img
                    className="w-48 h-48 object-cover rounded-lg shadow-lg"
                    src={albumData.image}
                    alt={albumData.name}
                />
                <div className="md:ml-6 mt-6 md:mt-0">
                    <p className="uppercase text-sm font-semibold">Playlist</p>
                    <h2 className="text-4xl md:text-6xl font-bold mt-2">{albumData.name}</h2>
                    <p className="text-gray-300 mt-2">{albumData.desc}</p>
                    <p className="mt-4 text-sm text-gray-400 flex items-center">
                        <span className="font-semibold">{albumData.creator}</span>
                        <span className="mx-2">•</span>
                        {albumData.followers.toLocaleString()} Follower
                        <span className="mx-2">•</span>
                        {playlistSongs.length} Songs
                    </p>
                </div>
            </div>

            {/* Play Button */}
            <div className="mt-8 px-8">
                <button
                    onClick={() => playWithId(playlistSongs[0].id, playlistSongs)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full flex items-center"
                >
                    {/* Play Icon */}
                    <img className="w-6 h-6 mr-2" src={assets.playIcon} alt="Play" />
                    Play
                </button>
            </div>

            {/* Song List */}
            <div className="mt-8 px-8">
                <div className="grid grid-cols-3 sm:grid-cols-4 mb-4 text-gray-400 border-b border-gray-700 pb-2">
                    <p className="col-span-2"># Title</p>
                    <p className="hidden sm:block">Date Added</p>
                    <p className="text-right mr-4">Duration</p>
                </div>

                {playlistSongs.map((item, index) => (
                    <div
                        key={item.id}
                        onClick={() => playWithId(item.id, playlistSongs)}
                        className="grid grid-cols-3 sm:grid-cols-4 gap-4 items-center py-2 hover:bg-gray-800 cursor-pointer group px-2"
                    >
                        {/* Song Index and Title */}
                        <div className="col-span-2 flex items-center">
                            <p className="w-8 text-gray-400 group-hover:text-green-500">{index + 1}</p>
                            <img
                                className="w-12 h-12 object-cover ml-4 mr-4"
                                src={item.image}
                                alt={item.name}
                            />
                            <div>
                                <p className="text-white font-semibold">{item.name}</p>
                                <p className="text-gray-400 text-sm">{item.artist}</p>
                            </div>
                        </div>

                        {/* Date Added */}
                        <p className="hidden sm:block text-gray-400">{item.dateAdded}</p>

                        {/* Duration */}
                        <p className="text-gray-400 text-right mr-4">{item.duration}</p>
                    </div>
                ))}
            </div>

            {/* Spacing at the bottom */}
            <div className="h-32"></div>
        </div>
    );
};

export default DisplayAlbum;
