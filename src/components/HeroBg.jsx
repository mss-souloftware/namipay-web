import Image from "next/image";
import "./HeroBg.module.css";

export default function HeroBg() {
  return (
    <div className="heroBgFixed overflow-hidden flex items-center justify-center h-screen w-screen fixed top-0 left-0 bg-themeGreen -z-10 bg-[url('/images/banners/home-hero-bg.jpg')] bg-cover bg-no-repeat">
      <div className="h-[120vh] w-[120vw] relative top-0 left-0 text-center flex items-center justify-center z-10">
        <div className="absolute top-0 bottom-0 m-auto h-[full] w-full dotsRotate">
          <Image src='/images/banners/animeBg/circle-dots.png' layout='fill' objectFit='contain' />
        </div>
        <div className="absolute top-0 bottom-0 m-auto h-[98%] w-[98%]">
          <Image src='/images/banners/animeBg/circle-solid.png' layout='fill' objectFit='contain' />
        </div>
        <div className="absolute top-0 bottom-0 m-auto h-[75%] w-[75%] dotsRotate">
          <Image src='/images/banners/animeBg/circle-dots.png' layout='fill' objectFit='contain' />
        </div>
      </div>
    </div>
  )
}
