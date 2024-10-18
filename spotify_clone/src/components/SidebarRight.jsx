import React, {useContext} from 'react'
import {assets} from "../assets/assets.js";


const SidebarRight = ({name, image, desc}) => {

    return (

        <div className="w-[25%] h-full p-2 pl-0 flex-col gap-2 text-white hidden lg:flex">
            <div className="bg-[#121212] h-full rounded flex flex-col justify-around">
                <div className="p-2">
                    <img className="w-20" src={image} alt=""/>
                </div>
            </div>
        </div>
            )
            }
            export default SidebarRight
