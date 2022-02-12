import { motion } from 'framer-motion';

export const Card = ({ img, title, delivery, link, theme }) => {
	return (
		<a
			href={link}
			target='_blank'
			rel='noreferrer'
			className='inline-block duration-300 hover:scale-110'
		>
			<motion.div
				initial={{ rotate: 10 }}
				whileInView={{ rotate: 3 }}
				transition={{ duration: 1.2, type: 'spring', bounce: 0.3 }}
				className='max-w-md antialiased text-gray-900 wrapper'
			>
				<div>
					<img
						src={img}
						alt={`example of project: ${title}`}
						className='object-cover object-center w-full rounded-lg shadow-lg'
					/>

					<div className='relative px-2 -mt-5 md:px-4 '>
						<div className='bg-white dark:bg-[#07182F] p-4 md:p-6 rounded-lg shadow-xl space-y-3'>
							<div className='flex flex-wrap items-baseline space-y-2 lg:space-y-0'>
								<span className='inline-block px-2 mr-2 text-xs font-semibold text-teal-800 uppercase bg-teal-200 rounded-full dark:text-teal-200 dark:bg-teal-800 '>
									design
								</span>
								<span className='inline-block px-2 mr-2 text-xs font-semibold uppercase rounded-full bg-rose-200 dark:bg-rose-800 dark:text-rose-200 text-rose-800 '>
									development
								</span>
								<span className='inline-block px-2 mr-2 text-xs font-semibold text-indigo-800 uppercase bg-indigo-200 rounded-full dark:bg-indigo-800 dark:text-indigo-200 '>
									hosting
								</span>
							</div>

							<h4 className='font-semibold leading-tight uppercase truncate dark:text-gray-100 text-md md:text-lg'>
								{title}
							</h4>

							<div className='text-sm text-gray-600 dark:text-gray-200 md:text-md'>
								Delivered {delivery}
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</a>
	);
};
