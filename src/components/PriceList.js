import React, { useState } from 'react';
import bg from '../img/uuundulate-50-2.svg';
import Modal from 'react-modal';
import { ContactForm } from './Contact/ContactForm';

export const PriceList = ({ theme }) => {
	const customStyles = {
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(7,24,47, 0.65)',
		},
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			transform: 'translate(-50%, -50%)',
			padding: '3rem',
			border: '#feb703 1px solid',
			backgroundColor: 'white',
		},
	};
	const customStylesDark = {
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(7,24,47, 0.65)',
		},
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			transform: 'translate(-50%, -50%)',
			padding: '3rem',
			border: '#feb703 1px solid',
			backgroundColor: 'rgb(7, 24, 47)',
		},
	};

	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div
			className={`min-h-screen bg-center flex bg-no-repeat ${
				theme === 'dark' && 'bg-[#07182F]'
			}`}
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className='py-10 m-auto max-w-7xl'>
				<section>
					<header className='text-center'>
						<h3 className='text-5xl font-extrabold lg:text-8xl md:text-7xl'>
							PRICING
						</h3>
						{/* <p className='mb-2 text-xl text-gray-400'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit
						dolor sit amet consectetur.
					</p>
					<p className='text-xl font-bold text-gray-500'>
						Maxime tenetur debitis fuga vitae soluta.
					</p> */}
					</header>
					<div className='flex flex-col justify-between mx-5 mt-10 space-y-5 md:space-y-0 md:flex-row md:space-x-5 md:mx-0'>
						<div className='flex-1'>
							<div className='p-10 bg-white border-[#feb703] border rounded-lg'>
								<div className='flex items-center justify-between'>
									<div>
										<h4 className='text-3xl font-bold text-gray-900'>
											Basic
										</h4>
										<p className='text-xs text-gray-500'>
											$15 USD per hour
										</p>
									</div>
									<div>
										<div className='p-2 text-center bg-gray-100 rounded-lg'>
											<p className='text-xs text-gray-400'>
												starting at
											</p>
											<h4 className='text-3xl font-bold text-gray-900'>
												$89
											</h4>
										</div>
									</div>
								</div>
								<hr className='mt-5 text-gray-100' />
								{/* <!-- START LIST SECTION--> */}
								<div className='mt-10'>
									<ul className='space-y-4'>
										<li className='flex items-center'>
											<div className='p-1 bg-indigo-900 rounded-full'>
												<svg
													className='flex-shrink-0 w-4 h-4 text-white'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													aria-hidden='true'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														stroke-width='2'
														d='M5 13l4 4L19 7'
													/>
												</svg>
											</div>

											<span className='ml-3 text-base text-indigo-900'>
												Font-end development
											</span>
										</li>
										<li className='flex items-center'>
											<div className='p-1 bg-indigo-900 rounded-full'>
												<svg
													className='flex-shrink-0 w-4 h-4 text-white'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													aria-hidden='true'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														stroke-width='2'
														d='M5 13l4 4L19 7'
													/>
												</svg>
											</div>

											<span className='ml-3 text-base text-indigo-900'>
												Custom domain acquisition*
											</span>
										</li>
										<li className='flex items-center'>
											<div className='p-1 bg-indigo-900 rounded-full'>
												<svg
													className='flex-shrink-0 w-4 h-4 text-white'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													aria-hidden='true'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														stroke-width='2'
														d='M5 13l4 4L19 7'
													/>
												</svg>
											</div>

											<span className='ml-3 text-base text-indigo-900'>
												Cloud hosting management*
											</span>
										</li>

										<li className='flex items-center'>
											<div className='bg-gray-200 rounded-full '>
												<svg
													className='flex-shrink-0 w-4 h-4 text-white'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														stroke-width='2'
														d='M6 18L18 6M6 6l12 12'
													/>
												</svg>
											</div>

											<span className='ml-3 text-base text-gray-300'>
												Web design
											</span>
										</li>
										<li className='flex items-center'>
											<div className='bg-gray-200 rounded-full '>
												<svg
													className='flex-shrink-0 w-4 h-4 text-white'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														stroke-width='2'
														d='M6 18L18 6M6 6l12 12'
													/>
												</svg>
											</div>

											<span className='ml-3 text-base text-gray-300'>
												Content creation
											</span>
										</li>
									</ul>
								</div>
								{/* <!-- END LIST SECTION--> */}
								<div className='mt-10'>
									<button
										onClick={openModal}
										className='w-full py-3 text-lg font-bold border rounded-lg bg-[#feb703] text-white hover:scale-110 transition'
									>
										I'm interested!
									</button>
								</div>
							</div>
						</div>

						<div className='flex-1'>
							<div className='p-10 bg-white border-[#feb703] border rounded-lg'>
								<div className='flex items-center justify-between'>
									<div>
										<h4 className='text-3xl font-bold text-transparent bg-cover bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
											Ultimate
										</h4>
										<p className='text-xs text-gray-500'>
											$15 USD per hour
										</p>
									</div>
									<div>
										<div className='p-2 text-center bg-gray-100 rounded-lg'>
											<p className='text-xs text-gray-400'>
												starting at
											</p>
											<h4 className='text-3xl font-bold text-gray-900'>
												$179
											</h4>
										</div>
									</div>
								</div>
								<hr className='mt-5 text-gray-100' />
								{/* <!-- START LIST SECTION--> */}
								<div className='mt-10'>
									<ul className='space-y-4'>
										<li className='flex items-center'>
											<div className='p-1 bg-indigo-900 rounded-full'>
												<svg
													className='flex-shrink-0 w-4 h-4 text-white'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													aria-hidden='true'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														stroke-width='2'
														d='M5 13l4 4L19 7'
													/>
												</svg>
											</div>

											<span className='ml-3 text-base text-indigo-900'>
												Front-end development
											</span>
										</li>
										<li className='flex items-center'>
											<div className='p-1 bg-indigo-900 rounded-full'>
												<svg
													className='flex-shrink-0 w-4 h-4 text-white'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													aria-hidden='true'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														stroke-width='2'
														d='M5 13l4 4L19 7'
													/>
												</svg>
											</div>

											<span className='ml-3 text-base text-indigo-900'>
												Custom domain acquistion*
											</span>
										</li>
										<li className='flex items-center'>
											<div className='p-1 bg-indigo-900 rounded-full'>
												<svg
													className='flex-shrink-0 w-4 h-4 text-white'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													aria-hidden='true'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														stroke-width='2'
														d='M5 13l4 4L19 7'
													/>
												</svg>
											</div>

											<span className='ml-3 text-base text-indigo-900'>
												Cloud hosting management*
											</span>
										</li>
										<li className='flex items-center'>
											<div className='p-1 bg-indigo-900 rounded-full'>
												<svg
													className='flex-shrink-0 w-4 h-4 text-white'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													aria-hidden='true'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														stroke-width='2'
														d='M5 13l4 4L19 7'
													/>
												</svg>
											</div>

											<span className='ml-3 text-base text-indigo-900'>
												Unique web design
											</span>
										</li>
										<li className='flex items-center'>
											<div className='p-1 bg-indigo-900 rounded-full'>
												<svg
													className='flex-shrink-0 w-4 h-4 text-white'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													aria-hidden='true'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														stroke-width='2'
														d='M5 13l4 4L19 7'
													/>
												</svg>
											</div>

											<span className='ml-3 text-base text-indigo-900'>
												Content creation
											</span>
										</li>
									</ul>
								</div>
								{/* <!-- END LIST SECTION--> */}
								<div className='mt-10'>
									<button
										onClick={openModal}
										className='w-full py-3 text-lg font-bold border rounded-lg bg-[#feb703] text-white hover:scale-110 transition'
									>
										I'm interested!
									</button>
									<Modal
										isOpen={modalIsOpen}
										onRequestClose={closeModal}
										ariaHideApp={false}
										style={
											theme === 'dark'
												? customStylesDark
												: customStyles
										}
									>
										<p>
											Feel free to contact me at{' '}
											<span className='font-bold'>
												leonardorommero@gmail.com
											</span>
										</p>
									</Modal>
								</div>
							</div>
						</div>
					</div>
				</section>
				<p className='mt-10 text-lg text-center text-gray-500'>
					* Custom domain price and cloud hosting fee not included
				</p>
			</div>
		</div>
	);
};
