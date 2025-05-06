'use client'
import {
	BriefcaseBusiness,
	CalendarCog,
	FileSpreadsheet,
	FileText,
	GraduationCap,
	Images,
	MoveUpRight,
	ShoppingCart,
	Users,
	type LucideIcon,
} from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type ServiceItem = {
	title: string
	description: string
	icon: LucideIcon
}

const services: ServiceItem[] = [
	{
		title: 'Landing sahifalar',
		description:
			'Qisqa ta`sirli va maqsadli sahifalar mijozlarni alohida harakatga undash uchun mo`ljallangan',
		icon: FileSpreadsheet,
	},
	{
		title: 'Korporativ veb-sayt',
		description:
			'Kompaniyaning umumiy ma`lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma`lumot berish.',
		icon: BriefcaseBusiness,
	},
	{
		title: 'Online do’kon',
		description:
			'Mahsulotlar yoki xizmatlarni onlayn tarzda sotish. To‘lov tizimlari va mahsulotni boshqarish tizimi mavjud.',
		icon: ShoppingCart,
	},
	{
		title: 'CRM tizimi',
		description:
			'Mijozlar bilan ishlashni avtomatlashtirish va boshqarish. Katta kompaniyalar yoki mijozlar bilan faol ishlaydigan tashkilotlar.',
		icon: Users,
	},
	{
		title: 'Portfolio saytlari',
		description:
			'Shaxsiy yoki kompaniya ishlarini ko‘rsatish. Freelancerlar yoki ijodkorlar uchun o‘z ishlarini targ‘ib qilishda.',
		icon: Images,
	},
	{
		title: 'Blog sahifalari',
		description:
			'O‘z fikrlari, yangiliklari yoki ma`lumotlarini o‘rtoqlashish. Ma`lumot yetkazish, auditoriyani jalb qilish va reklama qilish uchun.',
		icon: FileText,
	},
	{
		title: 'Ta’lim platformasi',
		description:
			'Ta`lim kurslari, videodarsliklar, yoki online testlar uchun. O‘quv muassasalari yoki onlayn dars beruvchi kompaniyalar uchun.',
		icon: GraduationCap,
	},
	{
		title: 'ERP platformasi',
		description:
			'ERP platformasi korxona yoki tashkilotning barcha jarayonlarini birlashtiruvchi kompleks dasturiy ta`minotdir.',
		icon: CalendarCog,
	},
	{
		title: 'Alohida loyihami ?',
		description:
			'Biz yangi startap loyihalarni ham rivojlantirishda yordam beramiz, shakllantiramiz.',
		icon: MoveUpRight,
	},
]

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
}

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
}

const Services = () => {
	return (
		<div className='py-20 '>
			<div className='container w-10/12 mx-auto'>
				<div className='flex flex-col gap-10'>
					<h3 className='text-center font-[Inter] text-white text-[40px] font-semibold'>
						Xizmat turlari
						<p className='text-white font-[Inter] text-[18px] font-normal mt-2'>
							Dasturlash sohasidagi eng talabgir xizmat turlaridan
							quyidagilar:
						</p>
					</h3>

					<motion.div
						className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center place-items-center gap-6'
						variants={containerVariants}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
					>
						{services.map(
							({ title, description, icon: Icon }, index) => {
								const isLast = index === services.length - 1

								return (
									<motion.div
										key={index}
										variants={cardVariants}
										className={`cursor-pointer w-90 h-92 rounded-[16px] backdrop-blur-xs 
                      ${isLast ? 'bg-[#5A00DB]' : 'bg-white/10'} 
                      text-white font-[Inter] text-[16px] font-semibold  
                      border border-gray-500 shadow-lg transition relative overflow-hidden 
                      hover:border-gray-300 
                      before:absolute before:inset-0 before:border before:border-gray-400 
                      before:rounded-md before:opacity-0 before:transition-opacity 
                      before:duration-500 hover:before:opacity-100 
                      flex flex-col items-center z-10 p-5 gap-2`}
									>
										<div className='w-40 h-40 border border-black/20 shadow-sm rounded-2xl backdrop-blur-xl flex items-center justify-center bg-white/5'>
											<Icon
												size={70}
												className='text-white'
											/>
										</div>
										<p className='text-center text-[25px] font-semibold font-[Inter] text-white'>
											{title}
										</p>
										<p className='text-center text-[16px] font-[Inter] text-white'>
											{description}
										</p>
									</motion.div>
								)
							}
						)}
					</motion.div>

					<Image
						src='/layer.png'
						alt='layer'
						width={300}
						height={200}
						className='lg:absolute hidden right-10 top-[880px] object-cover'
					/>
					<Image
						src='/layer.png'
						alt='layer'
						width={300}
						height={200}
						className='lg:absolute hidden left-10 top-[1080px] object-cover'
					/>
					<Image
						src='/layer.png'
						alt='layer'
						width={300}
						height={200}
						className='lg:absolute hidden left-[200px] top-[480px] object-cover'
					/>
				</div>
			</div>
		</div>
	)
}

export default Services
