import React from "react"
import {useNavigate, useParams} from "react-router-dom"

import {useData} from "../../hook/useData"

// img
import uzb from "../../assets/img/flag.png"

// icons
import {IoStar, IoStarHalf, IoStarOutline} from "react-icons/io5"
import {MdAddShoppingCart} from "react-icons/md"
import {FaChevronLeft} from "react-icons/fa6"
import PhoneInfo from "../../components/phone-info"

const ProductDetail = () => {
    const {id} = useParams()
    const {data: phones, isLoading, isError} = useData()

    const product = phones?.find((phone) => phone.id === id)

    const navigate = useNavigate()

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
            <section className="p-[30px] rounded-xl relative">
                <p
                    onClick={() => navigate(-1)}
                    className="left-[80px] flex justify-start cursor-pointer hover:text-green-500 items-center gap-[2px] text-[17px] absolute">
                    <FaChevronLeft className="text-[10px]" /> orqaga
                </p>
                <div className="container2">
                    <div className="grid grid-cols-2 bg-white rounded-xl">
                        <div className="flex justify-center items-center p-[20px] border-r border-gray-200">
                            <img
                                src={product?.img}
                                alt={product?.product_name}
                            />
                        </div>

                        <div className="p-[20px] flex flex-col gap-[25px]">
                            <h1 className="!font-sans font-medium text-2xl tracking-[0.1em] leading-[125%] text-black">
                                {product?.product_name}
                            </h1>

                            <div className="flex justify-start items-center gap-[5px]">
                                <div className="flex justify-start items-center gap-[10px]">
                                    <div className="flex justify-start items-center gap-[5px]">
                                        {renderStars(product?.ratings_stars)}
                                    </div>
                                    <p className="opacity-60">
                                        ({product?.ratings_stars})
                                    </p>
                                </div>

                                <p className="opacity-60 text-[13px] line-through">
                                    {product?.price_original
                                        ?.toLocaleString()
                                        ?.replace(/,/g, " ")}{" "}
                                    so’m
                                </p>
                            </div>

                            <h1 className="!font-sans font-medium text-[37px] text-[#1fba4a]">
                                {product?.price_current
                                    ?.toLocaleString()
                                    ?.replace(/,/g, " ")}{" "}
                                so'm
                            </h1>

                            <div className="flex justify-start items-center gap-[30px]">
                                <button className="bg-[#000] self-start !font-sans font-medium hover:bg-[#1fba4a] text-[#fff] flex justify-center items-center gap-[10px] p-[8px_100px] rounded-[6px] cursor-pointer active:scale-95 transition duration-[.2s]">
                                    <MdAddShoppingCart />
                                    Savatchaga
                                </button>

                                {product?.availability_in_stock ? (
                                    <p className="flex justify-start items-center gap-[5px] font-medium !font-sans">
                                        <span className="h-[10px] w-[10px] rounded-full bg-green-500"></span>{" "}
                                        Omborda mavjud
                                    </p>
                                ) : (
                                    <p className="flex justify-start items-center gap-[5px] font-medium !font-sans">
                                        <span className="h-[10px] w-[10px] rounded-full bg-red-500"></span>{" "}
                                        Omborda mavjud emas
                                    </p>
                                )}
                            </div>

                            <div className="flex justify-between items-center gap-[10px]">
                                <p className="text-[17px] font-medium !font-sans">
                                    Rangi:
                                </p>

                                <div className="grid grid-cols-4 gap-[10px]">
                                    <div className="p-[10px] hover:border-[#1fba4a] cursor-pointer rounded-xl border border-[#f6f8fa] flex flex-col gap-[3px] justify-center items-center">
                                        <span className="bg-[#576755] h-[20px] w-[20px] rounded-full"></span>

                                        <p className="text-[14px]">
                                            Alpine Green
                                        </p>
                                    </div>

                                    <div className="p-[10px] hover:border-[#1fba4a] cursor-pointer rounded-xl border border-[#f6f8fa] flex flex-col gap-[3px] justify-center items-center">
                                        <span className="bg-[#adc5db] h-[20px] w-[20px] rounded-full"></span>

                                        <p className="text-[14px]">
                                            Sierra Blue
                                        </p>
                                    </div>

                                    <div className="p-[10px] hover:border-[#1fba4a] cursor-pointer rounded-xl border border-[#f6f8fa] flex flex-col gap-[3px] justify-center items-center">
                                        <span className="bg-[#fae8d1] h-[20px] w-[20px] rounded-full"></span>

                                        <p className="text-[14px]">Gold</p>
                                    </div>

                                    <div className="p-[10px] hover:border-[#1fba4a] cursor-pointer rounded-xl border border-[#f6f8fa] flex flex-col gap-[3px] justify-center items-center">
                                        <span className="bg-[#dedddd] h-[20px] w-[20px] rounded-full"></span>

                                        <p className="text-[14px]">Silver</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-start items-center gap-[10px] bg-[#e9f8ed] p-[10px] rounded-md">
                                <img src={uzb} alt="" />
                                <p className="font-bold">
                                    O’zbekiston bo’ylab yetkazib berish:
                                </p>
                                <p>
                                    {product?.delivery_time.slice(0, 2)} ish
                                    kuni
                                </p>
                            </div>

                            <div className="flex flex-col">
                                <h1 className="font-medium !font-sans text-[20px]">
                                    Описание
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Magnam, officia asperiores
                                    expedita voluptatibus totam cum ullam enim
                                    molestias quae? Sint ut dicta iste animi
                                    natus amet sequi repellendus quia hic?
                                </p>
                            </div>
                        </div>
                    </div>

                    <PhoneInfo />
                </div>
            </section>
        </>
    )
}

export default ProductDetail
