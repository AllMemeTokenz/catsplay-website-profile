"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import config, { tokenCA } from "@/config";
import toast from "react-hot-toast";
import { NFTGallery } from "@/components/nft-card";
import FaqSection from "@/components/faq";
import TeamSection from "@/components/team-section";

// Define proper types for the button and line items
interface Button {
  text: string;
  href: string;
}

export default function HomePage() {
  function playDuckSound() {
    const audio = new Audio("/sounds/catsplay-welcome.mp3");
    audio.play();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <main className="flex flex-col max-w-[100vw] w-screen overflow-y-auto mt-[96px] lg:mt-0 overflow-x-hidden justify-center items-center h-full ">
        <section className="w-full flex lg:mb-0 lg:mt-0 flex-col lg:flex-row items-center justify-start lg:justify-between lg:px-[111px] px-5 xl:px-[190px] min-h-[calc(100vh-108px)]">
          <div className="lg:hidden flex mt-[52px] flex-col items-center justify-center">
            <div
              onClick={() => playDuckSound()}
              className="relative rounded-3xl active:opacity-[98%] active:scale-[0.95] transition-all ease-linear duration-100 cursor-pointer size-[220px]"
            >
              <Image
                src="https://res.cloudinary.com/dz4dypxxb/image/upload/v1741533234/catsplay-logo.png"
                alt="Catsplay Logo"
                fill
                className="rounded-3xl object-cover"
                draggable={false}
                unoptimized
              />
            </div>
          </div>
          <div className="flex flex-col mt-[52px] md:ml-9 lg:mt-0 text-start items-start justify-center ">
            <h1 className="font-bold leading-10 md:leading-normal text-[36px] lg:text-[42px] xl:text-[46px] text-blue-950">
              {config.homeMainSection.title}
            </h1>
            <h2 className="font-medium leading-7 mt-1 md:max-w-[400px] text-xl text-blue-950">
              {config.homeMainSection.description
                .split("\n")
                .map((line: string, index: number) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </h2>
            <div className="mt-3.5 flex flex-row items-center justify-center space-x-2">
              {config.homeMainSection.buttons.map(
                (button: Button, index: number) => (
                  <a
                    key={index}
                    href={button.href || "about:blank"}
                    className="font-semibold px-4 border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] text-blue-950 active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-yellow-500/80 active:bg-yellow-500/90 bg-yellow-500/70 text-[17px] py-2.5 rounded-xl"
                  >
                    {button.text}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="lg:flex hidden flex-col md:mr-9 items-center justify-center">
            <div
              onClick={() => playDuckSound()}
              className="relative rounded-3xl active:opacity-[98%] active:scale-[0.95] transition-all ease-linear duration-100 cursor-pointer size-[380px]"
            >
              <Image
                src="https://res.cloudinary.com/dz4dypxxb/image/upload/v1741533234/catsplay-logo.png"
                alt="Catsplay Logo"
                fill
                className="rounded-3xl object-cover"
                draggable={false}
                unoptimized
              />
            </div>
          </div>
        </section>
        {tokenCA && (
          <section className="w-full flex mb-5 lg:mb-0 lg:mt-0 flex-col lg:flex-row items-center justify-between lg:px-[111px] px-5 xl:px-[190px]">
            <div className="flex my-10 xl:mx-9 w-full flex-col items-center justify-center">
              <h2 className="text-3xl font-bold mb-2 text-center text-blue-950">
                $CatsPlay CA
              </h2>
              <h3 className="text-xl font-semibold mb-8 text-center text-blue-950">
                Hit the copy button so you won&apos;t get the address wrong!{" "}
              </h3>
              <div className="font-semibold flex flex-col sm:flex-row items-center justify-center text-center sm:space-x-5 space-y-3 sm:space-y-0 relative px-6 border border-[#9e782c] shadow-[1px_1px_0_#9e782c] transition-all ease-linear duration-100 bg-yellow-50 text-blue-950 text-[17px] py-3 rounded-xl">
                <span className="break-all sm:break-normal">
                  7RBeTk836UX49CaaxLFkoo1Fmw5vCa58CghpCYYitJEt
                </span>
                <a
                  onClick={() => {
                    navigator.clipboard
                      .writeText(tokenCA)
                      .then(() => {
                        toast.success("Copied to clipboard");
                      })
                      .catch(() => {
                        toast.error("Could not copy");
                      });
                  }}
                  className="font-semibold cursor-pointer px-4 uppercase border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] text-blue-950 active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-yellow-500/80 active:bg-yellow-500/90 bg-yellow-500/70 text-[17px] py-2 rounded-xl"
                >
                  COPY
                </a>
              </div>
            </div>
          </section>
        )}
        <TeamSection />
        <NFTGallery />
        <FaqSection />
      </main>
    </motion.div>
  );
}
