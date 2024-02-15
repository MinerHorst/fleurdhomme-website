import { motion as m } from "framer-motion";
import Navbar from "../Components/Navbar";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import hero from "../../public/hero.png";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <m.div
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        initial={{ y: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className=" grid h-screen w-screen grid-cols-12 grid-rows-6 bg-black text-white"
      >
        <Navbar />

        <main>
          <div className="col-span-full row-span-full row-start-2 grid h-screen w-screen grid-cols-12 grid-rows-6 overflow-x-hidden">
            <div className="col-span-10 col-start-2 row-span-3 row-start-2  flex flex-col items-center justify-center text-center">
              <Image alt="hero image" src={hero} className="object-cover" />
            </div>

            <div className="col-span-2 col-start-6 row-start-5 flex flex-col items-center justify-center">
              <ScrollLink
                to="discover"
                spy={true}
                smooth={true}
                duration={2000}
                className="h-[50%] w-full rounded-lg"
              >
                <button className="playfair h-[50%] w-full rounded-lg bg-[#c3ae62] text-black">
                  DISCOVER FLEUR D&apos;HOMME
                </button>
              </ScrollLink>
            </div>
          </div>
          <div className="grid h-screen w-screen grid-cols-2 " id="discover">
            <div className="col-span-1 border"></div>
            <div className="col-span-1 border"></div>
          </div>
          <div className="grid h-screen w-screen grid-cols-2 ">
            <div className="col-span-1 border"></div>
            <div className="col-span-1 border"></div>
          </div>
          <div className="grid h-[65vh] w-screen grid-cols-12 grid-rows-6 gap-3">
            <m.div
              initial={{ x: "-100" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.5 }}
              className="col-span-3 col-start-2 row-span-4 row-start-2 border"
            ></m.div>

            <m.div
              initial={{ x: "+100vh" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="col-span-7 col-start-5 row-span-4 row-start-2"
            >
              <p className="playfair flex flex-col items-center justify-center border [font-size:_clamp(2em,3.5vw,8em)]">
                Take our Quiz and find out what Perfume fits you best.
              </p>
              <Link href={"/quiz/quiz"}>
                <p className="flex cursor-pointer flex-row items-center gap-2 underline">
                  To the Quiz
                  <ArrowRight strokeWidth={1} size={16} />
                </p>
              </Link>
            </m.div>
          </div>
          <div className="grid h-[35vh] w-screen grid-cols-12 grid-rows-6">
            <div className="col-span-full row-span-5  flex flex-col items-center justify-center">
              <p className="playfair [font-size:_clamp(4em,10vw,15em)]">
                Fleur d&apos;homme
              </p>
            </div>
            <div className="col-span-full row-start-6 flex h-full w-full flex-col items-center justify-center text-sm">
              <div className="grid h-full w-full grid-cols-6 p-2">
                <div className="col-span-3 flex flex-col justify-between sm:col-span-2 md:flex-row">
                  <p>© {new Date().getFullYear()} Fleur d&apos;homme</p>
                  <p>Terms of Service</p>
                  <p>Privacy Policy</p>
                  <p>Docs</p>
                </div>
                <div className="col-span-2 col-start-5 text-end">
                  <span>Germany - </span>
                  {new Date().toLocaleTimeString("en-US", {
                    timeZone: "Europe/Berlin",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </m.div>
    </>
  );
}
