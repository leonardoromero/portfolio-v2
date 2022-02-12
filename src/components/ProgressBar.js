import React, { useEffect, useState } from 'react';

export const ProgressBar = () => {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		let progressBarHandler = () => {
			const totalScroll = document.documentElement.scrollTop;
			const windowHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const scroll = `${totalScroll / windowHeight}`;
			setScroll(scroll);
		};
		window.addEventListener('scroll', progressBarHandler);
		return () => window.removeEventListener('scroll', progressBarHandler);
	});
	return (
		<div className='progressBarContainer'>
			<div
				className='bg-gradient-to-r from-purple-600 to-pink-600 progressBar'
				style={{
					transform: `scale(${scroll}, 1)`,
				}}
			></div>
		</div>
	);
};
