'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
	Briefcase,
	ChevronRight,
	Github,
	Globe,
	Home,
	Instagram,
	Linkedin,
	Phone,
	Settings,
	X,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type React from 'react'
import { useEffect, useState } from 'react'

interface SidebarProps {
	isOpen: boolean
	onClose: () => void
}

const menuItems = [
	{ name: 'Bosh sahifa', icon: Home, href: '/' },
	{ name: 'Portfolio', icon: Briefcase, href: '/portfolio' },
	{ name: 'Xizmatlar', icon: Settings, href: '/service' },
	{ name: 'Aloqa', icon: Phone, href: '#footer' },
]

const languages = ['UZ', 'EN']

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
	const [activeItem, setActiveItem] = useState(0)
	const [selectedLanguage, setSelectedLanguage] = useState('UZ')

	useEffect(() => {
		const handleEscKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				onClose()
			}
		}

		window.addEventListener('keydown', handleEscKey)

		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			window.removeEventListener('keydown', handleEscKey)
			document.body.style.overflow = 'auto'
		}
	}, [isOpen, onClose])

	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className='fixed inset-0 z-20 bg-black'
						onClick={onClose}
						aria-hidden='true'
					/>
				)}
			</AnimatePresence>

			<motion.div
				className='fixed inset-y-0 left-0 z-30 w-80 border-r border-gray-300/20 bg-gradient-to-b from-[#0E041D] to-[#1A0B2E] shadow-2xl'
				initial={{ x: '-100%' }}
				animate={{ x: isOpen ? 0 : '-100%' }}
				transition={{
					type: 'spring',
					stiffness: 300,
					damping: 30,
				}}
			>
				<div className='relative h-full flex flex-col p-5'>
					<div className='flex justify-between items-center pb-6 border-b border-gray-700/30'>
						<Link href='/' className='flex items-center gap-1'>
							<Image
								src='/logo.svg'
								width={150}
								height={100}
								alt='logo'
							/>
						</Link>
						<motion.button
							whileHover={{ rotate: 90 }}
							transition={{ duration: 0.2 }}
							onClick={onClose}
							className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-800/50 text-gray-400 hover:bg-purple-900/30 hover:text-white'
							aria-label='Yopish'
						>
							<X size={18} />
						</motion.button>
					</div>

					<nav className='mt-8 flex-grow'>
						<ul className='space-y-1'>
							{menuItems.map((item, idx) => (
								<motion.li
									key={idx}
									initial={{ x: -20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{
										delay: idx * 0.1,
										duration: 0.3,
									}}
								>
									<Link
										href={item.href}
										className={`flex items-center justify-between group px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
											activeItem === idx
												? 'bg-purple-900/20 text-purple-300'
												: 'text-gray-300 hover:bg-gray-800/40 hover:text-white'
										}`}
										onClick={() => {
											setActiveItem(idx)
											if (window.innerWidth < 768) {
												onClose()
											}
										}}
									>
										<div className='flex items-center gap-3'>
											<span
												className={`${
													activeItem === idx
														? 'bg-purple-700/50 text-purple-300'
														: 'bg-gray-800/50 text-gray-400 group-hover:bg-gray-700/50 group-hover:text-white'
												} w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200`}
											>
												<item.icon size={18} />
											</span>
											{item.name}
										</div>
										<motion.span
											animate={{
												x: activeItem === idx ? 0 : -5,
												opacity:
													activeItem === idx ? 1 : 0,
											}}
											transition={{ duration: 0.2 }}
										>
											<ChevronRight
												size={16}
												className='text-purple-400'
											/>
										</motion.span>
									</Link>
								</motion.li>
							))}
						</ul>
					</nav>

					<div className='mt-4 mb-6'>
						<p className='text-gray-500 text-xs uppercase font-medium mb-2 px-4'>
							Til
						</p>
						<div className='flex bg-gray-800/30 rounded-lg p-1'>
							{languages.map(lang => (
								<button
									key={lang}
									className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
										selectedLanguage === lang
											? 'bg-purple-700/50 text-white'
											: 'text-gray-400 hover:text-white'
									}`}
									onClick={() => setSelectedLanguage(lang)}
								>
									{lang}
								</button>
							))}
						</div>
					</div>

					<div className='mt-auto pt-4 border-t border-gray-700/30'>
						<div className='flex justify-center space-x-4'>
							<motion.a
								href='https://github.com'
								target='_blank'
								rel='noopener noreferrer'
								className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-800/50 text-gray-400 hover:bg-purple-900/30 hover:text-white transition-colors duration-200'
								whileHover={{ y: -3 }}
							>
								<Github size={18} />
							</motion.a>
							<motion.a
								href='https://linkedin.com'
								target='_blank'
								rel='noopener noreferrer'
								className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-800/50 text-gray-400 hover:bg-purple-900/30 hover:text-white transition-colors duration-200'
								whileHover={{ y: -3 }}
							>
								<Linkedin size={18} />
							</motion.a>
							<motion.a
								href='https://instagram.com'
								target='_blank'
								rel='noopener noreferrer'
								className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-800/50 text-gray-400 hover:bg-purple-900/30 hover:text-white transition-colors duration-200'
								whileHover={{ y: -3 }}
							>
								<Instagram size={18} />
							</motion.a>
							<motion.a
								href='#'
								className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-800/50 text-gray-400 hover:bg-purple-900/30 hover:text-white transition-colors duration-200'
								whileHover={{ y: -3 }}
							>
								<Globe size={18} />
							</motion.a>
						</div>
						<p className='text-gray-500 text-xs text-center mt-4'>
							© {new Date().getFullYear()} Noventer Team
						</p>
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default Sidebar
