import React from "react";
import HeroBg from "./HeroBg";


export default function Hero() {
    return (
        <>
            <HeroBg />
            <section className="relative h-screen">
                <h1 className="text-white text-[10vw] font-extralight uppercase">The Future</h1>
                <h2 className="text-white text-[10vw] font-extralight uppercase text-center -mt-6">OF <span className="mainTitleGradient font-medium">SAUDI</span></h2>
                <div className="relative w-[100%] flex items-center justify-between">
                    <h2 className="mainTitleGradient translate-x-[84%] w-2/4 text-white text-[10vw] uppercase font-medium -mt-6">PAYMENT</h2>
                    <p className="text-white text-2xl w-2/4 pl-10 opacity-0">
                        Leveraging the latest in financial technologies, Nami offers its partners state-of-the-art payment processing solutions, that are tailored to meet business needs.
                    </p>
                </div>
            </section>
        </>
    )
}
