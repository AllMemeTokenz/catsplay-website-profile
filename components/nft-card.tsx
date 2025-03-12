"use client";

import type React from "react";
import Image from "next/image";

// NFT data type
interface NFT {
  collection: string;
  name: string;
  creator: string;
  price: number;
  currency?: string;
  image: string;
  buyLink: string;
}

// Sample NFT data with Cloudinary images
const nftData: NFT[] = [
  {
    collection: "Catsplay NFTS",
    name: "Catsplay Mafia",
    creator: "Catsplay",
    price: 51.25,
    currency: "SOL",
    image:
      "https://res.cloudinary.com/dz4dypxxb/image/upload/v1741756408/NFT_Mafia_qv69f8.jpg",
    buyLink: "https://www.okx.com/ul/ZqDefob",
  },
  {
    collection: "Catsplay NFTS",
    name: "Catsplay Journalist",
    creator: "Catsplay",
    price: 358.75,
    currency: "SOL",
    image:
      "https://res.cloudinary.com/dz4dypxxb/image/upload/v1741756408/NFT_Jurnalis_oglf5z.jpg",
    buyLink: "https://www.okx.com/ul/4pKqJti",
  },
  {
    collection: "Catsplay NFTS",
    name: "Catsplay Machinist",
    creator: "Catsplay",
    price: 512.5,
    currency: "SOL",
    image:
      "https://res.cloudinary.com/dz4dypxxb/image/upload/v1741756409/NFT_Masinis_ycpm37.jpg",
    buyLink: "https://www.okx.com/ul/SxG7ijC",
  },
];

// NFT Card Component
function NFTCard({
  collection,
  name,
  creator,
  price,
  currency = "ETH",
  image,
  buyLink,
}: NFT) {
  return (
    <div className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg border border-[#9e782c] shadow-[2px_2px_0_#9e782c] bg-amber-100 rounded-xl hover:translate-y-[-2px]">
      <div
        className="relative aspect-square overflow-hidden"
        onContextMenu={(e) => e.preventDefault()}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105 select-none pointer-events-none"
          draggable="false"
          unselectable="on"
        />
        <div className="absolute inset-0 w-full h-full" />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-blue-950 border border-[#9e782c] rounded-full">
            {collection}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-blue-950 truncate">{name}</h3>
        </div>

        <div className="flex items-center text-sm text-blue-950 mb-3">
          <span>Created by </span>
          <span className="font-medium text-[#9e782c] ml-1">{creator}</span>
        </div>
      </div>

      <div className="p-4 pt-0 flex justify-between items-center mt-2">
        <div className="flex flex-col">
          <span className="text-sm text-blue-950">Current Price</span>
          <div className="flex items-center">
            <span className="font-bold text-lg text-blue-950">{price}</span>
            <span className="ml-1 text-blue-950">{currency}</span>
          </div>
        </div>

        <a
          href={buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold cursor-pointer px-4 uppercase border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] text-blue-950 active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-yellow-500/80 active:bg-yellow-500/90 bg-yellow-500/70 text-[17px] py-2 rounded-xl"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}

// Main NFT Gallery Component that includes both data and UI
export function NFTGallery() {
  // Disable right-click on the entire gallery
  const disableRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <section
      className="w-full flex mb-5 lg:mb-0 lg:mt-10 flex-col lg:flex-row items-center justify-between lg:px-[111px] px-5 xl:px-[190px]"
      onContextMenu={disableRightClick}
    >
      <div className="flex my-10 xl:mx-9 w-full flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-2 text-center text-blue-950">
          Featured NFTs
        </h2>
        <h3 className="text-xl font-semibold mb-8 text-center text-blue-950">
          Explore our top CatsPlay NFTs rare, unique, and perfect for every cat
          loving collector. Get yours now before it{"'"}s gone!{" "}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {nftData.map((nft, index) => (
            <NFTCard key={index} {...nft} />
          ))}
        </div>
      </div>
    </section>
  );
}
