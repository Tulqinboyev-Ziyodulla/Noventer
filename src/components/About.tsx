'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
	const fadeUp = {
		hidden: { opacity: 0, y: 50 },
		visible: (custom: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: custom * 0.5,
				duration: 0.5,
				ease: 'easeOut',
			},
		}),
	}

	return (
		<div>
			<motion.div
				className='bg-[#5A00DB] w-full h-[100px] flex items-center absolute top-[722px]'
				initial='hidden'
				animate='visible'
				variants={fadeUp}
				custom={0}
			>
				<div className='container w-10/12 mx-auto'>
					<h1 className='text-3xl font-bold text-white font-[Inter]'>
						Biz haqimizda
					</h1>
					<p className='text-[18px] font-semibold text-white font-[Inter]'>
						Qisqacha ma’lumot
					</p>
				</div>
			</motion.div>

			<div className='mt-40'>
				<div className='container w-10/12 mx-auto'>
					<motion.div
						className='grid gap-y-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center'
						initial='hidden'
						animate='visible'
						variants={fadeUp}
						custom={1}
					>
						{[
							{
								img: '/aboutimg.jpg',
								title: 'Boshlanishi',
								desc: 'Biz --- dan ish boshladik va ---- larni oldimizga maqsad qilib qo’ydik',
							},
							{
								img: '/aboutimg1.jpg',
								title: 'Uzoq muddatli loyihalar',
								desc: 'Tajribamiz davomida umumiy hisobda - - loyiha uchun -- - muddatda ishlab topshirdik',
							},
							{
								img: '/aboutimg2.jpg',
								title: 'Jamoamiz kengaymoqda',
								desc: 'Jamoamiz safi esa tobora kengaymoqda. Boshida - kishidan boshlangan faoliyatimiz hozirda -- kishi bilan davom etmoqda',
							},
						].map((card, index) => (
							<motion.div
								key={index}
								className='max-w-sm w-full backdrop-blur-xs bg-white/10 text-white font-[Inter] text-[16px] font-semibold rounded-md border border-gray-500 shadow-lg transition cursor-pointer relative overflow-hidden hover:border-gray-300 before:absolute before:inset-0 before:border before:border-gray-400 before:rounded-md before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 flex flex-col items-center z-10'
								initial='hidden'
								animate='visible'
								variants={fadeUp}
								custom={index + 2}
							>
								<Image
									src={card.img}
									alt='aboutimg'
									width={400}
									height={200}
									className='object-cover h-80 w-full'
								/>
								<div className='px-2 my-2 w-[90%] flex flex-col gap-2'>
									<p className='text-[24px] font-semibold'>
										{card.title}
									</p>
									<p className='text-[18px]'>{card.desc}</p>
								</div>
							</motion.div>
						))}
					</motion.div>

					<motion.div
						className='lg:absolute hidden left-100 top-250'
						initial='hidden'
						animate='visible'
						variants={fadeUp}
						custom={4}
					>
						<Image
							src='/layer.png'
							alt='aboutimg'
							width={300}
							height={200}
							className='object-cover w-full'
						/>
					</motion.div>
					<motion.div
						className='lg:absolute hidden right-0 top-260'
						initial='hidden'
						animate='visible'
						variants={fadeUp}
						custom={5}
					>
						<Image
							src='/layer.png'
							alt='aboutimg'
							width={300}
							height={200}
							className='object-cover w-full'
						/>
					</motion.div>

					<motion.p
						className='text-white text-[18px] text-center mt-8 max-w-3xl mx-auto'
						initial='hidden'
						animate='visible'
						variants={fadeUp}
						custom={6}
					>
						Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak.
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry`s standard dummy text ever since the 1500s...
					</motion.p>
				</div>
			</div>
		</div>
	)
}

export default About
