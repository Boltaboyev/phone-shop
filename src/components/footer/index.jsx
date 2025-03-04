import React from "react"

// img
import logo from "../../assets/img/logo.png"
import google from "../../assets/img/googleplay.png"
import appstore from "../../assets/img/appstore.png"

const Footer = () => {
    return (
        <footer className="bg-white py-[30px] pb-[40px]">
            <div className="container2">
                <div className="w-full grid grid-cols-2 gap-[10px]">
                    <div className="flex justify-between items-start gap-[10px] w-full">
                        <div className="flex flex-col justify-between items-start gap-[8px]">
                            <img src={logo} alt="" className="w-[100px]" />
                            <p className="font-medium !font-sans text-[19px] leading-[150%] text-black">
                                Mobilux © 2025
                            </p>
                            <p className="!font-sans font-medium text-[13px]">
                                Barcha huquqlar kafolatlangan
                            </p>
                            <div className="flex justify-start items-center gap-[10px]">
                                <img src={google} alt="" />
                                <img src={appstore} alt="" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-[5px] justify-start">
                            <h1 className="font-medium !font-sans text-[19px] leading-[150%] text-black">
                                Foydali havolalar
                            </h1>
                            <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136]">
                                Bosh sahifa
                            </p>
                            <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136]">
                                Yordam kerakmi?
                            </p>
                            <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136]">
                                Foydalanish shartlari
                            </p>
                            <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136]">
                                Maxfiylik siyosati
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col pl-[140px]">
                        <h1 className="font-medium !font-sans text-[19px] leading-[150%] text-black">
                            Biz haqimizda
                        </h1>

                        <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136]">
                            Manzil: #214, G-dong, Lotte castle, 347 Jongno,
                            Jongno-gu, Seoul
                        </p>
                        <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136]">
                            Korxona nomi: Mobilux trade
                        </p>
                        <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136]">
                            Korxona rahbari: HASANBOY TURSUNOV
                        </p>
                        <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136]">
                            Registratsiya raqami: 433-62-00377
                        </p>
                        <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136]">
                            Telefon raqam: 93 000 66-44 97 000 66-44
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
