import React from "react"
import {Outlet} from "react-router-dom"

import Header from "../components/header"
import Footer from "../components/footer"

// icons
import {FaBasketShopping} from "react-icons/fa6"

const Layout = () => {
    return (
        <>
            <Header />
            <main className="bg-[#f6f8fa] relative">
                {/* counter */}
                <div className="bg-black flex flex-col shadow-md gap-[8px] p-[10px] rounded-[6px] fixed -right-21 hover:-right-1 transition-all duration-[.2s] z-10 top-2/6">
                    <p className="text-white text-[12px] flex justify-center items-center gap-[3px]">
                        <FaBasketShopping /> 0 mahsolot
                    </p>

                    <p className="bg-white text-black flex justify-center items-center rounded-md">
                        0
                    </p>
                </div>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
