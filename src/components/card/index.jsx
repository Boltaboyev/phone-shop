import React from "react"

import {useData} from "../../hook/useData"
import {Link} from "react-router-dom"

// icons
import {IoStar, IoStarHalf, IoStarOutline} from "react-icons/io5"
import {MdAddShoppingCart} from "react-icons/md"

const CardItem = () => {
    const {data: phone, isLoading} = useData()

    const renderStars = (rating) => {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<IoStar key={i} className="text-[#DFB300]" />)
            } else if (rating > i - 1 && rating < i) {
                stars.push(<IoStarHalf key={i} className="text-[#DFB300]" />)
            } else {
                stars.push(<IoStarOutline key={i} className="text-[#DFB300]" />)
            }
        }
        return stars
    }

    return (
        <>
            {phone?.map((value) => (
                <Link
                    key={value?.id}
                    to={`phone/${value?.id}`}
                    className="flex flex-col gap-[5px] p-[10px_15px] bg-white rounded-[8px] justify-between">
                    <div className="flex justify-center items-center p-[10px] h-[250px]">
                        <img
                            src={value?.img}
                            alt={value?.product_name}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <p className="font-normal text-sm leading-[143%] text-[#1fba4a]">
                        {value?.product_name}
                    </p>

                    <div className="flex justify-between items-center gap-[5px]">
                        <div className="flex justify-start items-center gap-[3px] text-[13px]">
                            {renderStars(value?.ratings_stars)}
                            <p className="opacity-60">
                                ({value?.ratings_stars})
                            </p>
                        </div>

                        <p className="opacity-60 text-[13px] line-through">
                            {value?.price_original
                                ?.toLocaleString()
                                ?.replace(/,/g, " ")}{" "}
                            so’m
                        </p>
                    </div>

                    <h1 className="font-extrabold text-lg leading-[133%] text-[#0a0a0a]">
                        {value?.price_current
                            ?.toLocaleString()
                            ?.replace(/,/g, " ")}{" "}
                        so’m
                    </h1>

                    <button className="bg-[#f6f8fa] !font-sans font-medium border border-[#1fba4a] hover:bg-[#1fba4a] text-[#0a0a0a] hover:text-white flex justify-center items-center gap-[10px] w-full p-[8px] rounded-[6px] cursor-pointer active:scale-95 transition duration-[.2s]">
                        <MdAddShoppingCart />
                        Savatchaga
                    </button>
                </Link>
            ))}
        </>
    )
}

export default CardItem
