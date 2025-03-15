"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import config, { tokenCA, telegramLink } from "@/config";

export default function TokenomicsPage() {
  // Use the tokenCA from the imported config
  const pumpFunLink =
    tokenCA && tokenCA !== "7RBeTk836UX49CaaxLFkoo1Fmw5vCa58CghpCYYitJEt"
      ? `https://pump.fun/coin/${tokenCA}`
      : undefined;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {/* Added consistent margin-top for all screen sizes */}
      <div className="flex flex-col mt-[108px] max-w-[100vw] overflow-x-hidden items-center pb-16">
        <section className="w-full flex flex-col items-center justify-center px-6 md:px-16">
          <div className="flex flex-col w-full text-center items-center justify-start">
            <h1 className="font-bold text-[32px] lg:text-[36px] xl:text-[40px] text-blue-950">
              {config.tokenomicsPage.title}
            </h1>
            <h2 className="font-medium leading-7 text-lg xl:text-xl text-blue-950">
              {config.tokenomicsPage.description}
            </h2>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="relative size-[300px]">
              <Image
                src="/charts/tokenomics.png"
                alt="Tokenomics Distribution Chart"
                className="w-full"
                fill
                unoptimized
                draggable={false}
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center text-center">
            <div className="flex flex-row items-center justify-center space-x-2">
              <div className="bg-blue-950 border border-zinc-900/15 active:scale-[0.98] transition-all ease-linear duration-100 rounded-full w-5 h-5" />
              <span className="font-semibold text-lg mt-1 text-blue-950">
                {"->"} Total Supply: 1 Billion $CTY
              </span>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <div className="bg-yellow-500 border border-zinc-900/15 active:scale-[0.98] transition-all ease-linear duration-100 rounded-full w-5 h-5" />
              <span className="font-semibold text-lg mt-1 text-blue-950">
                {"->"} For Liquidity Pool (
                <a
                  className={`${
                    pumpFunLink
                      ? "text-blue-500 hover:text-blue-600/90 hover:underline"
                      : ""
                  } transition-all ease-linear duration-100`}
                  href={pumpFunLink || telegramLink}
                >
                  {pumpFunLink ? "Pump.fun" : "Join Community"}
                </a>
                )
              </span>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <div className="bg-yellow-300 border border-zinc-900/15 active:scale-[0.98] transition-all ease-linear duration-100 rounded-full w-5 h-5" />
              <span className="font-semibold text-lg mt-1 text-blue-950">
                {"->"} For Community & Ecosystem
              </span>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <div className="bg-yellow-100 border border-zinc-900/15 active:scale-[0.98] transition-all ease-linear duration-100 rounded-full w-5 h-5" />
              <span className="font-semibold text-lg mt-1 text-blue-950">
                {"->"} For Dev Holdings (Locked)
              </span>
            </div>
          </div>
        </section>

        {/* Whitepaper Section */}
        <section className="w-full flex mt-20 flex-col items-center justify-center px-6 md:px-16">
          <motion.div
            className="flex flex-col w-full text-center items-center justify-start"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="font-bold text-[32px] lg:text-[36px] xl:text-[40px] text-blue-950">
              $CTY WHITEPAPER
            </h1>
            <h2 className="font-medium leading-7 text-lg xl:text-xl text-blue-950 max-w-2xl mt-2">
              CATSPLAY ($CTY): THE AI MEME & NFT REVOLUTION ON SOLANA!
              <br />
              Discover our vision, mission, and roadmap for the future of
              CatsPlay.
            </h2>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <a
              href="/whitepaper/catsplay-whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold cursor-pointer px-4 uppercase border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] text-blue-950 active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-yellow-500/80 active:bg-yellow-500/90 bg-yellow-500/70 text-[17px] py-2 rounded-xl flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Whitepaper
            </a>
          </motion.div>

          <motion.div
            className="mt-6 text-blue-950/70 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            Learn about our technology, tokenomics, and the future of CatsPlay
          </motion.div>
        </section>

        {/* NFT Collection Section */}
        <section className="w-full flex mt-20 flex-col items-center justify-center px-6 md:px-16">
          <motion.div
            className="flex flex-col w-full text-center items-center justify-start"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="font-bold text-[32px] lg:text-[36px] xl:text-[40px] text-blue-950">
              CATSPLAY NFT COLLECTION
            </h1>
            <h2 className="font-medium leading-7 text-lg xl:text-xl text-blue-950 max-w-2xl mt-2">
              Explore our unique cat-themed NFT collection on OKX Marketplace
            </h2>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <a
              href="https://www.okx.com/ul/9xaq7qV"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold cursor-pointer px-4 uppercase border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] text-blue-950 active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-yellow-500/80 active:bg-yellow-500/90 bg-yellow-500/70 text-[17px] py-2 rounded-xl flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              View NFT Collection
            </a>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}
