"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "@/config";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Container variants for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Item variants for individual FAQ items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full flex flex-col items-center justify-center px-5 md:px-8 lg:px-12 xl:px-16 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col text-center items-center justify-start mb-8"
      >
        <h1 className="font-bold text-[32px] lg:text-[36px] xl:text-[40px] text-blue-950">
          {config.faqPage?.title || "Frequently Asked Questions"}
        </h1>
        <h2 className="font-medium md:max-w-[600px] leading-7 text-lg xl:text-xl text-blue-950">
          {config.faqPage?.description
            ?.split("\n")
            .map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            )) ||
            "Find answers to the most common questions about our project."}
        </h2>
      </motion.div>

      <motion.div
        className="w-full max-w-[797px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {(
          config.faqPage?.faqs || [
            {
              question: "What is Catsplay?",
              answer:
                "Catsplay is an innovative platform designed for cat enthusiasts.",
            },
            {
              question: "How can I participate?",
              answer:
                "You can participate by joining our community and following our roadmap phases.",
            },
            {
              question: "When is the official launch?",
              answer:
                "The official launch is scheduled for Q3 2025, as outlined in our roadmap.",
            },
            {
              question: "How can I contact the team?",
              answer:
                "You can reach out to our team through our official social media channels or email.",
            },
          ]
        ).map((faq, index) => (
          <motion.div
            key={`faq-${index}`}
            variants={itemVariants}
            className="mb-4 bg-amber-100 overflow-hidden border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] text-blue-950 active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-amber-200 active:bg-amber-200bg-amber-100 text-[17px] py-2 rounded-xl"
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.99,
              transition: { duration: 0.1 },
            }}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full p-[19px] text-start flex justify-between items-center"
            >
              <span className="font-semibold text-[20px] tracking-[-0.020em]">
                {faq.question}
              </span>
              <motion.span
                className="text-2xl"
                animate={{
                  rotate: openIndex === index ? 180 : 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {openIndex === index ? "−" : "+"}
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      },
                      opacity: {
                        duration: 0.25,
                        delay: 0.1,
                      },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      },
                      opacity: {
                        duration: 0.2,
                      },
                    },
                  }}
                  className="px-[19px] pb-[19px]"
                >
                  <motion.p
                    className="font-medium text-[18px] tracking-tight"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                        delay: 0.1,
                      },
                    }}
                  >
                    {faq.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
