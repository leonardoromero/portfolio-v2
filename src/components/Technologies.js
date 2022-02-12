import React from 'react';
import html from '../img/icons/html.svg';
import css from '../img/icons/css.svg';
import sass from '../img/icons/sass.svg';
import javascript from '../img/icons/javascript.svg';
import json from '../img/icons/json.svg';
import jquery from '../img/icons/jquery.svg';
import react from '../img/icons/react.svg';
import git from '../img/icons/git.svg';
import github from '../img/icons/github.svg';
import apple from '../img/icons/apple.svg';
import windows from '../img/icons/windows.svg';
import firebase from '../img/icons/firebase.svg';
import npm from '../img/icons/npm.svg';
import python from '../img/icons/python.svg';
import slack from '../img/icons/slack.svg';
import pic from '../img/profile.jpg';
import logo from '../img/icons/logo.png';

export const Technologies = ({ theme }) => {
	return (
		<>
			<div
				className={`grid w-full py-10 lg:bg-fixed lg:py-40 place-items-center ${
					theme === 'light'
						? 'custom-background-light'
						: 'custom-background-dark'
				}`}
			>
				<div className='grid grid-cols-4 gap-4 p-6 rounded-xl backdrop-blur-[2px] md:grid-cols-6 lg:grid-cols-8 max-w-7xl place-items-center'>
					
					<div className='relative w-10/12 col-span-4 row-span-4 md:col-span-5 lg:col-span-4 before:block before:absolute before:-inset-1 before:-rotate-6 before:bg-[#feb703]'>
						<img
							className='relative border-4 border-white'
							src={pic}
							alt='profile'
							loading='lazy'
						/>
					</div>
					<img className='w-full' src={html} alt='html logo' loading='lazy'/>
					<img className='w-full' src={css} alt='css logo' loading='lazy'/>
					<img className='w-full' src={sass} alt='sass logo' loading='lazy'/>
					<img
						className='w-full'
						src={javascript}
						alt='javascript logo'
					loading='lazy'/>
					<img
						className={`w-full ${theme === 'dark' && 'invert'}`}
						src={json}
						alt='json logo'
					loading='lazy'/>
					<img className='w-full' src={jquery} alt='jquery logo' loading='lazy'/>
					<img className='w-full' src={react} alt='react logo' loading='lazy'/>
					<img className='w-full' src={git} alt='git logo' loading='lazy'/>
					<img
						className={`w-full ${theme === 'dark' && 'invert'}`}
						src={github}
						alt='github logo'
					loading='lazy'/>
					<img className='w-full' src={apple} alt='apple logo' loading='lazy'/>
					<img className='w-full' src={windows} alt='windows logo' loading='lazy'/>
					<img className='w-full' src={python} alt='python logo' loading='lazy'/>
					<img
						className='w-full'
						src={firebase}
						alt='firebase logo'
					loading='lazy'/>
					<img
						className={`w-full ${theme === 'dark' && 'invert'}`}
						src={npm}
						alt='npm logo'
					loading='lazy'/>
					<img className='w-full' src={slack} alt='slack logo' loading='lazy'/>
					<img className='w-full' src={logo} alt='leo romero logo' loading='lazy'/>
				</div>
			</div>
		</>
	);
};
