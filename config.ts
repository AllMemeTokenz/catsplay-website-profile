/*
 * $PEKKY Website Config File
 */

// Socials
export const nftLink = 'https://www.okx.com/ul/9xaq7qV'; // Instagram
export const telegramLink = 'https://t.me/catsplaycommunity'; // Telegram
export const twitterLink = 'https://x.com/catsplaytoken?'; // Twitter

// Token Info
export const tokenCA = "12345678910"; // Token contract

// Page contents
export default {
  redLineText: "$CTY To The Moon!", // Red bar's text in top of the page
  // Main route (/)
  homeMainSection: {
    title: "$CTY to the Moon",
    description:
      "$CTY is a playful digital cat mascot. Join the community now and explore the purrfect world of cat themed NFTs!", // The \n component breaks lines if you want to add, you can.
    buttons: [
      {
        text: tokenCA ? "Buy now" : "Join now",
        href: tokenCA
          ? `https://jup.ag/SOL-${tokenCA}`
          : telegramLink,
      },
    ],
  },
  // Tokenomics route (/tokenomics)
  tokenomicsPage: {
    title: "TOKENOMICS",
    description: "$CTY Tokenomics",
  },
  // Tokenomics route (/roadmap)
  roadmapPage: {
    title: "OUR ROADMAP",
    description: `This roadmap outlines our journey to exciting milestones, including listings on major exchanges. Let's pave the way for innovative developments.`,
    phases: [
      // Phase 1
      {
        items: [
          "Launch the telegram",
          "Publish the website",
          "Build a strong community",
        ],
      },
      // Phase 2
      {
        items: [
          "Launch on pump.fun",
          "Airdrop for early members",
          "Launch Pekky the Duck game",
        ],
      },
      // Phase 3
      {
        items: ["CoinGecko and CMC Listing", "Hire crypto influencers"],
      },
      // Phase 4
      {
        items: [
          "Establish DAO's for token's future",
          "Insure long-term sustainability",
        ],
      },
    ],
  },
};
//:end
