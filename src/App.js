import './App.css';
import { Hero } from './components/Hero';
import { Technologies } from './components/Technologies';
import useSystemTheme from 'use-system-theme';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { PriceList } from './components/PriceList';
import { ProgressBar } from './components/ProgressBar';

function App() {
	const systemTheme = useSystemTheme();

	return (
		<>
			<ProgressBar />
			<Hero theme={systemTheme} />
			<Projects theme={systemTheme} />
			<Technologies theme={systemTheme} />
			<PriceList theme={systemTheme} />
			<Footer theme={systemTheme} />
		</>
	);
}

export default App;
