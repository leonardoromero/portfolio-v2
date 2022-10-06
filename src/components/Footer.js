import React from 'react';
import footerGradient from '../img/footer-gradient.svg';
import linkedin from '../img/icons/linkedin.svg';
import instagram from '../img/icons/instagram.svg';
import whatsapp from '../img/icons/whatsapp.svg';
import github from '../img/github.png';
import logo from '../img/icons/logo.png';

export const Footer = () => {
	return (
		<div
			className='p-5 bg-fixed'
			style={{ backgroundImage: `url(${footerGradient})` }}
		>
			<div className='flex flex-col justify-around w-10/12 p-5 m-auto bg-gray-900 md:p-10 md:flex-row md:items-center bg-opacity-60 max-w-7xl'>
				<p className='text-center text-gray-300'>
					Copyright 2022 © All rights reserved
				</p>
				<div className='flex items-center justify-center mt-3 space-x-5 align-middle md:mt-0 icons'>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.linkedin.com/in/romeroleonardojav/'
					>
						<img
							src={linkedin}
							alt='linkedin logo'
							className='h-8 transition invert hover:scale-125'
						/>
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.instagram.com/_leorome/'
					>
						<img
							src={instagram}
							alt='instagram logo'
							className='h-8 transition invert hover:scale-125'
						/>
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://wa.me/5491157736507'
					>
						<img
							src={whatsapp}
							alt='whatsapp logo'
							className='h-8 transition invert hover:scale-125'
						/>
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.github.com/leonardoromero'
					>
						<img
							src={github}
							alt='github logo'
							className='h-8 transition invert hover:scale-125'
						/>
					</a>

					<img src={logo} alt='leo romero logo' className='h-8' />
				</div>
			</div>
		</div>
	);
};
