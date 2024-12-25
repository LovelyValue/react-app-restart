import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
	const data = [
		{
			title: 'Приключение',
			date: new Date(),
			text: 'Какой-то текст',
		},
		{
			title: 'Приключение',
			date: new Date(),
			text: 'Какой-то текст',
		},
	];
	return (
		<>
			<Button />
			<JournalItem
				title={data[0].title}
				date={data[0].date}
				text={data[0].text}
			/>
			<JournalItem
				title={data[1].title}
				date={data[1].date}
				text={data[1].text}
			/>
		</>
	);
}

export default App;
