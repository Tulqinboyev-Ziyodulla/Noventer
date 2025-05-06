'use client'

import { Check, ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type Language = {
	code: string
	name: string
	flag: string
	nativeName: string
}

const languages: Language[] = [
	{
		code: 'en',
		name: 'English',
		nativeName: 'English',
		flag: '/eng.png',
	},
	{
		code: 'uz',
		name: 'Uzbek',
		nativeName: "O'zbek",
		flag: '/uzb.png',
	},
]

export function LanguageSwitcher() {
	const [currentLanguage, setCurrentLanguage] = useState<Language>(
		languages[0]
	)

	const handleLanguageChange = (language: Language) => {
		setCurrentLanguage(language)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='default'
					className='flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200/20 bg-white/10'
				>
					<Image
						src={currentLanguage.flag}
						alt='til'
						width={30}
						height={30}
						className=''
					/>
					<span className='font-medium font-[Inter] text-white'>
						{currentLanguage.nativeName}
					</span>
					<ChevronDown className='h-4 w-4 text-gray-500' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='w-[130px] bg-[#0E041D] '
			>
				{languages.map(language => (
					<DropdownMenuItem
						key={language.code}
						className={cn(
							'flex items-center gap-2  px-3 py-2 cursor-pointer bg-[#0E041D] ',
							currentLanguage.code === language.code &&
								'bg-[#0E041D] '
						)}
						onClick={() => handleLanguageChange(language)}
					>
						<Image
							src={language.flag}
							alt='til'
							width={20}
							height={20}
							className='text-xl'
						/>

						<span className='font-medium text-white font-[Inter]'>
							{language.nativeName}
						</span>
						{currentLanguage.code === language.code && (
							<Check className='h-4 w-4 ml-auto' />
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
