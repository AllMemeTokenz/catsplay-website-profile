"use client";
import React from "react";
import { Grandstander } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

const grandstander = Grandstander({ subsets: ["latin"] });

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="$CTY is a playful digital cat mascot. Join the community now and explore the purrfect world of cat themed NFTs!"
        />
        <meta
          name="keywords"
          content="cats, funny, crypto, pumpfun, raydium, memecoin, telegram mini app, telegram app, cats app, catsplay, cty"
        />
        <meta name="author" content="$CTY" />
        {/* Open Graph meta tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="$CTY" />
        <meta
          property="og:description"
          content="$CTY is a playful digital cat mascot. Join the community now and explore the purrfect world of cat themed NFTs!"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz4dypxxb/image/upload/v1741533234/catsplay-logo.png"
        />
        <meta
          property="og:url"
          content="https://res.cloudinary.com/dz4dypxxb/image/upload/v1741533234/catsplay-logo.png"
        />
        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="" />
        <meta name="twitter:title" content="$CTY" />
        <meta
          name="twitter:description"
          content="$CTY is a playful digital cat mascot. Join the community now and explore the purrfect world of cat themed NFTs!"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dz4dypxxb/image/upload/v1741533234/catsplay-logo.png"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Theme color */}
        <meta name="theme-color" content="#fafaf2" />
        <title>$CTY - Step Into the Digital Cat Universe!</title>
      </head>
      <body
        className={
          "dark:bg-background-dark max-w-[100vw] overflow-x-hidden bg-background-light text-background-dark dark:text-background-light " +
          grandstander.className
        }
      >
        <motion.div
          initial={{ opacity: 0, x: -0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Toaster
            toastOptions={{
              className: "!z-[9999] !bg-[#fefce8] !border !border-[#fafaf2]",
            }}
            containerClassName="md:mt-14 mt-24"
          />
          <Header />
          {children}
        </motion.div>
        <footer className="w-full py-4 px-5 md:px-8 lg:px-12 xl:px-16 border-t-2 border-blue-950">
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Logo on the left */}
            <div className="flex items-center">
              <div className="relative h-10 w-32 sm:h-12 sm:w-36">
                {/* Replace with your actual logo */}
                <div className="flex items-center">
                  <div className="p-2 rounded-lg">
                    <span className="font-bold text-2xl text-blue-950">
                      CATSPLAY
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright on the right */}
            <div className="text-blue-950 font-medium text-sm sm:text-base">
              © Catsplay 2025. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
