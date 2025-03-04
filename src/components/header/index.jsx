import React from "react"
import {Link} from "react-router-dom"

// img
import logo from "../../assets/img/logo.png"
import lang from "../../assets/img/lang.png"

// icons
import {VscSettings} from "react-icons/vsc"
import { IoMdNotificationsOutline } from "react-icons/io"
import { FaUserCircle } from "react-icons/fa"

const Header = () => {
    return (
        <header className="py-[20px] shadow-md">
            <div className="container2 flex justify-between items-center gap-[10px]">
                <Link to={"/"}>
                    <img src={logo} alt="logo" />
                </Link>

                <form className="flex justify-between items-center h-[40px] border border-[#1fba4a] w-[64%] rounded-[5px] overflow-hidden max-[700px]:hidden">
                    <input
                        type="text"
                        placeholder="Qidirish"
                        className="h-full w-full outline-none px-[20px]"
                    />

                    <button className="flex justify-center items-center gap-[8px] cursor-pointer font-medium text-white bg-[#1fba4a] h-full px-[30px]">
                        <VscSettings />
                        Filter
                    </button>
                </form>

                <div className="flex justify-center items-center gap-[30px]">
                    <div className="flex justify-center cursor-pointer items-center p-[8px] gap-[10px] select-none rounded-[5px] bg-[#f6f8fa] max-[330px]:hidden">
                        <img src={lang} alt="uzb" />
                        <p className="text-[#1fba4a]">Uz</p>
                    </div>

                    <IoMdNotificationsOutline className="cursor-pointer text-[22px] hover:text-[#1fba4a] max-[450px]:hidden" />

                    <button className="flex justify-center items-center gap-[10px] h-[40px] px-[10px] rounded-[5px] border border-[#1fba4a] cursor-pointer font-medium hover:text-white hover:bg-[#1fba4a] transition duration-[.2s] active:scale-95">
                        Kirish
                        <FaUserCircle />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
