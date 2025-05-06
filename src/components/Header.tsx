"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const Header = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + custom * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <div className="dark:bg-[#0E041D] bg-[#0E041D] pt-16">
      <div className="container mx-auto w-10/12  pt-22 relative">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <motion.div className="z-10 max-w-xl my-5" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <motion.span className="block font-[Inter]" variants={fadeUp} custom={1}>
                Yuqori sifatdagi
              </motion.span>
              <motion.span className="block font-normal font-[Inter] " variants={fadeUp} custom={2}>
                aniqlikka asoslanib
              </motion.span>
              <motion.span className="block font-[Inter] text-[#5A00DB]" variants={fadeUp} custom={3}>
                istalgan turdagi
              </motion.span>
              <motion.span className="block font-[Inter]" variants={fadeUp} custom={4}>
                dasturlarni tayyorlaymiz
              </motion.span>
            </h1>
            <motion.button
              className="bg-[#5A00DB] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-colors font-[Inter] cursor-pointer"
              variants={fadeUp}
              custom={5}
            >
              Xizmatlar haqida
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-2 ml-2  lg:mt-8 relative z-10"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            <Image src="/Header.png" alt="Laptop display" className="w-full z-10" width={1000} height={1000} />
          </motion.div>
        </div>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4  z-20 absolute bottom-3 ">
          {[
            {
              icon: "/card1.svg",
              value: "7+ yillik",
              label: "Umumiy tajriba",
            },
            {
              icon: "/card1.svg",
              value: "5+",
              label: "Yirik loyihalar",
            },
            {
              icon: "/card1.svg",
              value: "8+",
              label: "Xizmat turlari",
            },
            {
              icon: "/card1.svg",
              value: "100%",
              label: "Xavfsizlik",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xs bg-white/10 text-white font-[Inter] text-[16px] font-semibold rounded-md border border-gray-500 shadow-lg transition cursor-pointer relative overflow-hidden hover:border-gray-300 before:absolute before:inset-0 before:border before:border-gray-400 before:rounded-md before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 flex items-center  gap-4 lg:px-4 lg:py-5 px-1 py-1"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              custom={index}
            >
              <Image
                src={card.icon || "/placeholder.svg"}
                alt={card.label}
                className="w-12 h-12 lg:w-16 lg:h-16"
                width={100}
                height={100}
              />
              <div className="text-white">
                <h2 className="font-bold text-xl lg:text-2xl">{card.value}</h2>
                <p className="text-sm lg:text-base">{card.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="w-[400px]  h-[550px] hidden lg:flex  rounded-xl absolute bottom-0 right-45 justify-center items-center border border-blue-400/1 bg-blue-400/10 bg-opacity-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
        >
          <Image src="/layer.png" alt="Layer" className="z-2 absolute right-2" width={500} height={400} />
          <Image src="/layer.png" alt="Layer" className="z-2 absolute right-2" width={500} height={400} />
        </motion.div>

        <motion.div
          className="w-[377px] h-[220px] hidden lg:flex bg-main/10 rounded-xl absolute bottom-0 left-[322px] justify-end items-center border-blue-400/1 bg-blue-400/10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
        ></motion.div>
      </div>
    </div>
  )
}

export default Header
