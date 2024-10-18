import React, {useContext, useRef} from 'react'
import SidebarLeft from "./components/SidebarLeft.jsx";
import Player from "./components/Player.jsx";
import Display from "./components/Display.jsx";
import {PlayerContext} from "./context/PlayerContext.jsx";
import SidebarRight from "./components/SidebarRight.jsx";

const App = () => {

    const { audioRef, track } = useContext(PlayerContext);

    return (
        <div className="h-screen bg-black">
            <div className="h-[90%] flex">
                <SidebarLeft/>
                <Display/>
                <SidebarRight/>
            </div>
            <Player/>
            <audio ref={audioRef} src={track.file} preload="auto"></audio>
        </div>
    )
}
export default App
