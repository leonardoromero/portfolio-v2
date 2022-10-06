import React from 'react';
import lightBg from '../img/ccchaos.svg';
import mk from '../img/mk.png';
import carolinails from '../img/carolinails.png';
import medium from '../img/medium.png';
import felipeSainz from '../img/felipe-sainz.png';
import ticko from '../img/ticko.png';
import { Card } from './Card';
import { motion } from 'framer-motion';


export const Projects = ({ theme }) => {
	return (
		<div
			className={`min-h-screen bg-cover flex justify-center items-center py-5 ${
				theme === 'dark' && 'bg-[#07182F]'
			}`}
			style={{ backgroundImage: `url(${lightBg})` }}
		>
			<div className='flex flex-col items-center justify-center w-10/12 gap-5 max-w-7xl'>
				<motion.div
					initial={{ scale:0.5 }}
					whileInView={{ scale:1 }}
					transition={{ duration: 1.2, type: 'spring', bounce: 0.3 }}>
					<h3 className='text-5xl font-extrabold lg:text-8xl md:text-7xl projects'>
						PROJECTS
					</h3>
				</motion.div>
				<div className='grid items-center justify-center w-11/12 grid-cols-1 gap-5 md:grid-cols-2 cards max-w-7xl'>
					<Card
						img={mk}
						title='mariano kowal'
						delivery='January 2022'
						link='https://www.marianokowal.com.ar'
						technologies={'[ReactJS, Tailwind, Framer Motion]'}
						design={true}
						development={true}
						deploy={true}
					/>
					<Card
						img={carolinails}
						title='carolinails'
						delivery='December 2021'
						link='https://carolinails.netlify.app'
						technologies={'[ReactJS, Tailwind]'}
						design={true}
						development={true}
						deploy={true}
					/>
					<Card
						img={felipeSainz}
						title='felipe sainz'
						delivery='April 2022'
						link='https://erefor.github.io/felipe-page/'
						technologies={'[ReactJS, Tailwind, Framer Motion]'}
						design={true}
						development={true}
						deploy={true}
					/>
					<Card
						img={medium}
						title='medium'
						delivery='May 2022'
						link='https://medium-leoromero.netlify.app'
						technologies={'[NextJS, ReactJS, Tailwind]'}
						design={false}
						development={true}
						deploy={true}
					/>
					<Card
						img={ticko}
						title='ticko'
						delivery='September 2022'
						link='https://hackaton-bearbuilders.vercel.app/'
						technologies={'[NextJS, ReactJS, SASS, RainbowKit]'}
						design={true}
						development={true}
						deploy={false}
					/>
				</div>
			</div>
		</div>
	);
};
