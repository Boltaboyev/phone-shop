import React from "react"

// icons
import {MdAddShoppingCart} from "react-icons/md"
import {FaAngleRight} from "react-icons/fa"

const Sidebar = () => {
    return (
        <div className=" sticky top-0 bg-white h-screen min-w-[240px] p-[10px_20px]">
            <div className="flex flex-col gap-[28px] w-full">
                <button className="!bg-[#1fba4a] flex justify-center items-center gap-[10px] w-full text-white p-[7px] rounded-[6px] cursor-pointer active:scale-95 transition duration-[.2s]">
                    <MdAddShoppingCart />
                    Maxsus buyurtma
                </button>

                <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-[500] cursor-pointer select-none hover:text-[#1fba4a] transition duration-[.2s]">
                    Smartfonlar
                    <FaAngleRight />
                </p>

                <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-[500] cursor-pointer select-none hover:text-[#1fba4a] transition duration-[.2s]">
                    Planshetlar
                    <FaAngleRight />
                </p>

                <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-[500] cursor-pointer select-none hover:text-[#1fba4a] transition duration-[.2s]">
                    Quloqchinlar
                    <FaAngleRight />
                </p>

                <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-[500] cursor-pointer select-none hover:text-[#1fba4a] transition duration-[.2s]">
                    Xotira kartalari
                    <FaAngleRight />
                </p>

                <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-[500] cursor-pointer select-none hover:text-[#1fba4a] transition duration-[.2s]">
                    Smartfon aksesuarlari
                    <FaAngleRight />
                </p>

                <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-[500] cursor-pointer select-none hover:text-[#1fba4a] transition duration-[.2s]">
                    Gadjetlar
                    <FaAngleRight />
                </p>

                <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-[500] cursor-pointer select-none hover:text-[#1fba4a] transition duration-[.2s]">
                    Quvvatlovchi uskunalar
                    <FaAngleRight />
                </p>

                <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-[500] cursor-pointer select-none hover:text-[#1fba4a] transition duration-[.2s]">
                    Kabellar
                    <FaAngleRight />
                </p>
            </div>
        </div>
    )
}

export default Sidebar
