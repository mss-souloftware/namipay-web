import React from "react";
import HeroBg from "./HeroBg";


export default function Hero() {
    return (
        <>
            <HeroBg />
            <section className="relative h-screen">
                <h1 className="text-white text-[10vw] font-extralight uppercase">The Future</h1>
                <h2 className="text-white text-[10vw] font-extralight uppercase text-center -m-12">OF <span className="mainTitleGradient font-medium leading-10">SAUDI</span></h2>
                <div className="relative w-[100%] h-full block">
                    <h2 className="mainTitleGradient absolute text-white text-[10vw] uppercase font-medium -m-12  left-0 ">PAYMENT</h2>
                    <p className="text-white text-3xl absolute ">
                        Leveraging the latest in financial technologies, Nami offers its partners state-of-the-art payment processing solutions, that are tailored to meet business needs.
                    </p>
                </div>
            </section>
        </>
    )
}
