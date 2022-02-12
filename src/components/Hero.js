import React, { useState, useEffect } from 'react';
import lightBg from '../img/hero-bg-light.svg';
import darkBg from '../img/hero-bg-dark.svg';
import textBg from '../img/title-bg.svg';
import TextTransition, { presets } from 'react-text-transition';

export const Hero = ({ theme }) => {
	const TEXTS = [
		'web designer 🖌️',
		'front-end developer 👨‍💻',
		'argentinian 🇦🇷',
		'cat person 🐱',
		'vegetarian 🌱',
		'bilingual',
	];
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const intervalId = setInterval(
			() => setIndex(index => index + 1),
			3000
		);
		return () => {
			clearTimeout(intervalId);
		};
	}, []);

	return (
		<div
			className='flex flex-col items-center justify-center w-full h-screen space-y-5 bg-cover'
			style={
				theme === 'light'
					? { backgroundImage: `url(${lightBg})` }
					: { backgroundImage: `url(${darkBg})` }
			}
		>
			<h1
				className='p-2 text-5xl font-bold text-transparent bg-cover md:text-8xl lg:text-9xl bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
				style={{ backgroundImage: `url(${textBg})` }}
			>
				Hello, I am Leo
			</h1>
			<h2
				className={
					theme === 'dark'
						? 'p-2 text-2xl md:text-4xl text-white'
						: 'p-2 text-2xl md:text-4xl'
				}
			>
				<TextTransition
					text={TEXTS[index % TEXTS.length]}
					springConfig={presets.default}
					inline={true}
					direction='down'
					className='font-bold'
					noOverflow={true}
				/>
			</h2>
		</div>
	);
};
