import Head from "next/head";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from "next/image"
import deved from "../app/personal-icon.png"
export default function Home(){
    return(
        <div>
            <Head>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <title>Riham Otman's Portfolio Website</title>
                <meta charSet="UTF-8"/>
                <link rel={"icon"} href="/favicon.ico"/>
            </Head>
            <main className={"bg-white px-10"}>
                <section className={"min-h-screen"}>
                    <div className={"text-center p-2 py-10 mb-5 "}>
                        <h2 className={"text-5xl py-2 text-teal-500 hover:text-teal-500 hover:scale-110 transition duration-300"}>Riham Otman</h2>
                        <h3 className={"text-2xl py-2 text-black hover:text-teal-500 hover:scale-110 transition duration-300"}>Aspiring Full-Stack Developer</h3>
                        <p className={"text-small py-3 leading-8 text-gray-800 "}>
                            Welcome to my first portfolio webpage!</p>
                    </div>
                    <div className={"text-5xl flex justify-center gap-16 py-3 text-gray-900"}>
                        <a href="https://github.com/Riham-Otman" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/riham-otman-b12696211/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin />
                        </a>
                    </div>

                    <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-80 md:w-80">
                        <Image alt={"Personal bitmoji icon"} src={deved} layout="fill" objectFit="cover"/>
                    </div>
                </section>

                <section>
                    <div></div>
                </section>
            </main>
        </div>
    )
}