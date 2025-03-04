import React, {useRef, useEffect, useState} from "react"

// antd
import {Button} from "antd"

// swiper
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination, Autoplay, Navigation} from "swiper/modules"

// img
import img1 from "../../assets/img/swiper.png"
import img2 from "../../assets/img/swiper.png"
import img3 from "../../assets/img/swiper.png"

// icons
import {MdChevronRight} from "react-icons/md"
import {FaChevronRight, FaChevronLeft} from "react-icons/fa6"

const Showcase = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const swiperRef = useRef(null)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (swiperRef.current && swiperRef.current.swiper) {
                const swiperInstance = swiperRef.current.swiper
                swiperInstance.params.navigation.prevEl = prevRef.current
                swiperInstance.params.navigation.nextEl = nextRef.current
                swiperInstance.navigation.init()
                swiperInstance.navigation.update()
            }
        }, 100)
    }, [])

    return (
        <>
            <Swiper
                ref={swiperRef}
                modules={[Pagination, Autoplay, Navigation]}
                autoplay={{delay: 4000, disableOnInteraction: false}}
                pagination={{clickable: true}}
                loop>
                {[img1, img2, img3].map((img, index) => (
                    <SwiperSlide
                        key={index}
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundPosition:
                                screenWidth <= 360
                                    ? index === 2
                                        ? "center"
                                        : "-500px"
                                    : screenWidth <= 500
                                    ? index === 2
                                        ? "center"
                                        : "-650px"
                                    : "center",
                            position: "relative",
                        }}></SwiperSlide>
                ))}
            </Swiper>

            <button
                ref={prevRef}
                className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full shadow-md hover:bg-gray-100 transition-all z-10 max-[500px]:p-2 max-[360px]:hidden max-[500px]:left-1">
                <FaChevronLeft className="text-2xl max-[500px]:text-xl" />
            </button>
            <button
                ref={nextRef}
                className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full shadow-md hover:bg-gray-100 transition-all z-10 max-[500px]:p-2 max-[360px]:hidden max-[500px]:right-1">
                <FaChevronRight className="text-2xl max-[500px]:text-xl" />
            </button>
        </>
    )
}

export default Showcase
