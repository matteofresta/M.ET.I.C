import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext.jsx';

const Songs = ({ id, name, desc, image }) => {
    const { playWithId } = useContext(PlayerContext);

    const handleClick = () => {
        playWithId(id);
    };

    return (
        <div onClick={handleClick} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img
                className="rounded-lg"
                src={image}
                alt={name}
            />
            <p className="fmt-2 mb-1 text-md mt-2">{name}</p>
            <p className="text-slate-200 text-sm opacity-50">{desc}</p>
        </div>
    );
};

export default Songs;
