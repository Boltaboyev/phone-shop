import React from "react"

import Sidebar from "../../components/sidebar"
import Showcase from "../../components/showcase"
import CardItem from "../../components/card"

// img
import showcase from "../../assets/img/swiper.png"

// icons
import {RiShoppingBag4Fill} from "react-icons/ri"

const Home = () => {
    return (
        <section>
            <div className="flex">
                {/* sidebar */}
                <Sidebar />

                {/* main */}
                <div className="flex flex-col p-[15px] pb-[40px]">
                    <div className="w-full relative">
                        {/* <Showcase /> */}
                        <img src={showcase} alt="" />
                    </div>

                    <h1 className="self-start flex justify-start items-center gap-[10px] py-[20px] font-black text-[25px]">
                        <RiShoppingBag4Fill className="text-[#1fba4a]" />
                        Yangi mahsulotlar
                    </h1>

                    <div className="grid grid-cols-4 gap-[11px]">
                        <CardItem/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
