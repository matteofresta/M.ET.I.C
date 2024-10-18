// src/components/DisplayHome.jsx

import React from 'react';
import Navbar from './Navbar.jsx';
import { albumsData, songsData } from '../assets/assets.js';
import MusicAlbum from './MusicAlbum.jsx';
import Songs from './Songs.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const DisplayHome = () => {
    return (
        <>
            <Navbar />

            {/* Featured Charts */}
            <div className="mb-8 px-4 md:px-8">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <Swiper
                    spaceBetween={16}
                    slidesPerView={'auto'}
                    freeMode={true}
                    className="flex"
                >
                    {albumsData.map((item) => (
                        <SwiperSlide key={item.id} style={{ width: '200px' }}>
                            <MusicAlbum
                                id={item.id}
                                name={item.name}
                                desc={item.desc}
                                image={item.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Stay Up-to-date */}
            <div className="mb-8 px-4 md:px-8">
                <h1 className="my-5 font-bold text-2xl">Stay Up-to-date</h1>
                <Swiper
                    spaceBetween={16}
                    slidesPerView={'auto'}
                    freeMode={true}
                    className="flex"
                >
                    {songsData.map((item) => (
                        <SwiperSlide key={item.id} style={{ width: '200px' }}>
                            <Songs
                                id={item.id}
                                name={item.name}
                                desc={item.artist}
                                image={item.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Recommended Station */}
            <div className="mb-8 px-4 md:px-8">
                <h1 className="my-5 font-bold text-2xl">Recommended Station</h1>
                <Swiper
                    spaceBetween={16}
                    slidesPerView={'auto'}
                    freeMode={true}
                    className="flex"
                >
                    {songsData.map((item) => (
                        <SwiperSlide key={item.id} style={{ width: '200px' }}>
                            <Songs
                                id={item.id}
                                name={item.name}
                                desc={item.artist}
                                image={item.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default DisplayHome;
