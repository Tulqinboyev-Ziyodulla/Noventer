'use client'
import { Button } from 'antd'
import React from 'react'

interface TeamMember {
	name: string
	surname: string
	role: string
}

const teamMembers: TeamMember[] = [
	{ name: 'Xusanov', surname: 'Alibek', role: 'Developer' },
	{ name: 'Xusanov', surname: 'Alibek', role: 'Developer' },
	{ name: 'Xusanov', surname: 'Alibek', role: 'Developer' },
	{ name: 'Xusanov', surname: 'Alibek', role: 'Developer' },
	{ name: 'Xusanov', surname: 'Alibek', role: 'Developer' },
	{ name: 'Xusanov', surname: 'Alibek', role: 'Developer' },
	{ name: 'Xusanov', surname: 'Alibek', role: 'Developer' },
	{ name: 'Xusanov', surname: 'Alibek', role: 'Developer' },
	{ name: 'Xusanov', surname: 'Alibek', role: 'Developer' },

]

const Footer: React.FC = () => {
	return (
		<div className=' py-20'>
			<div className='container w-10/12 mx-auto'>
				<h4 className='text-white text-[40px] font-bold text-center mb-10'>
					Biz bilan aloqa
					<p className='text-white text-[18px] font-[Inter] font-semibold text-center'>
						Loyihangizni qanday realizatsiya qilish haqida batafsil
						suhbatlashamiz
					</p>
				</h4>

				<div className='flex flex-wrap justify-between gap-10'>
					<div className='cursor-pointer w-full md:w-[60%] rounded-[16px] border  border-white/70 bg-white/7 backdrop-blur-xl p-[15px]'>
						<h5 className='text-[30px] font-[Inter] font-semibold text-white'>
							Bizning jamoa haqida
						</h5>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
							{teamMembers.map((member, index) => (
								<div
									key={index}
									className='overflow-hidden w-full sm:w-60 h-26 rounded-[16px] border  border-white/70 bg-white/8 backdrop-blur-xl p-2 flex gap-4 items-center'
								>
									<div className='w-14 h-14 rounded-2xl bg-white'></div>
									<div className='text-white'>
										<p className='text-[18px] font-[Inter] font-semibold'>
											{member.name}
										</p>
										<p className='text-[18px] font-[Inter] font-semibold'>
											{member.surname}
										</p>
										<p className='font-[Inter]'>
											{member.role}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='cursor-pointer w-full md:w-[35%] rounded-[16px] border   border-white/70 bg-white/7 backdrop-blur-xl p-[30px]'>
						<div className='flex flex-col justify-center items-center gap-2'>
							<p className='text-white font-[Inter] text-[30px] font-semibold'>
								Bepul konsultatsiya
							</p>
							<p className='text-white text-center text-[14px] font-[Inter]'>
								Loyihangiz bo‘yicha boshlang‘ich bepul
								konsultatsiya uchun ma’lumotingizni qoldiring.
							</p>

							<form
								onSubmit={e => e.preventDefault()}
								className='flex flex-col gap-5 mt-10 w-full'
							>
								<input
									type='text'
									placeholder='Ismingiz'
									className='w-full text-center border font-[Inter] border-black/15  outline-0 text-[18px] text-white bg-white/7 rounded-xl backdrop-blur-xl px-[30px] py-4'
									required
								/>
								<input
									type='tel'
									placeholder='Telefon raqamingiz'
									className='w-full text-center font-[Inter] border border-black/15  outline-0 text-[18px] text-white bg-white/7 rounded-xl backdrop-blur-xl px-[30px] py-4'
									required
								/>
								<Button
									type='primary'
									size='large'
									htmlType='submit'
									className='font-[Inter]'
								>
									Jo‘natish
								</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
