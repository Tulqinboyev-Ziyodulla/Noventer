'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
	{
		img: '/project.png',
		title: 'Tourmad loyihasi',
		desc: `Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z ichiga jamlagan bo‘lib ulardan: Mehmonxona xizmari, Restoran xizmati, Gitlik xizmati, Mashinada sayohat qilish uchun haydovchilar xizmati va boshqa ko‘plab xizmarlarni o‘z ichiga oladi.`,
		reverse: false,
	},
	{
		img: '/project1.png',
		title: 'ProRun loyihasi',
		desc: `Prorun.uz – bu saytda tez-tez bo‘lib o‘tadigan yugurish bo‘yicha musobaqalar bo‘lib o‘tadi va siz saytdan ro‘yxatdan o‘tgan holda istalgan musobaqada qatnashishingiz mumkin.`,
		reverse: true,
	},
	{
		img: '/project2.png',
		title: 'Xalq trans loyihasi',
		desc: `Lorem Ipsum – matbaa va dizayn sanoatida ishlatiladigan soxta matn bo‘lib, asrlar davomida standart shakl bo‘lib qolgan.`,
		reverse: false,
	},
]

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: 40 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: 'easeOut' },
	},
}

const Projects = () => {
	return (
		<div className='py-20'>
			<div className='container mx-auto w-10/12'>
				<h2 className='text-white text-4xl font-bold text-center mb-2 font-[Inter]'>
					Loyihalarimiz
				</h2>
				<p className='text-white text-center text-lg mb-12 font-[Inter]'>
					biz haqimizda gapirsin!
				</p>

				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.2 }}
				>
					{projects.map((project, index) => (
						<motion.div
							variants={itemVariants}
							key={index}
							className={`flex flex-col md:flex-row ${
								project.reverse ? 'md:flex-row-reverse' : ''
							} items-center gap-6 mb-16`}
						>
							<div className='md:w-1/2 w-full'>
								<Image
									src={project.img}
									alt={project.title}
									width={800}
									height={300}
									className='rounded-xl shadow-lg object-cover h-[400px]'
								/>
							</div>

							<div className='md:w-1/2 w-full flex flex-col gap-4'>
								<h3 className='font-[Inter] text-white text-2xl md:text-3xl font-bold'>
									{project.title}
								</h3>
								<p className='font-[Inter] text-white text-base md:text-lg'>
									{project.desc}
								</p>
								<button className='w-fit px-5 py-3 font-[Inter] bg-white/10 text-white border border-gray-500 hover:border-gray-300 rounded-xl shadow-md transition'>
									Loyihani ko`rish
								</button>
							</div>
						</motion.div>
					))}
				</motion.div>

				<div className='flex justify-center mt-10'>
					<button className='w-full md:w-80 h-12 bg-[#5A00DB] text-white text-lg font-medium rounded-xl font-[Inter] cursor-pointer'>
						Boshqa loyihalarni ko’rish
					</button>
				</div>
			</div>
		</div>
	)
}

export default Projects
