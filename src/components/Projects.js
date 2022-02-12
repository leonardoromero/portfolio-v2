import React from 'react';
import lightBg from '../img/ccchaos.svg';
import mk from '../img/mk.png';
import carolinails from '../img/carolinails.png';
import { Card } from './Card';

export const Projects = ({ theme }) => {
	return (
		<div
			className={`min-h-screen bg-cover flex justify-center items-center py-5 ${
				theme === 'dark' && 'bg-[#07182F]'
			}`}
			style={{ backgroundImage: `url(${lightBg})` }}
		>
			<div className='flex flex-col items-center justify-center w-10/12 gap-5 max-w-7xl'>
				<h3 className='text-5xl font-extrabold lg:text-8xl md:text-7xl projects'>
					PROJECTS
				</h3>
				<div className='flex flex-wrap items-center justify-center w-10/12 gap-5 cards max-w-7xl'>
					<Card
						img={mk}
						title='mariano kowal'
						delivery='January 2022'
						link='https://www.marianokowal.com.ar'
					/>
					<Card
						img={carolinails}
						title='carolinails'
						delivery='December 2021'
						link='https://carolinails.netlify.app'
					/>
				</div>
			</div>
		</div>
	);
};
