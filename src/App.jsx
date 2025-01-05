import './App.css';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

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
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				{/* {[<Button>1</Button>, <Button>2</Button>]} */}

				<JournalList>
					{data.map(el => (
						<CardButton>
							<JournalItem title={el.title} date={el.date} text={el.text} />
						</CardButton>
					))}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm />
			</Body>
		</div>
	);
}

export default App;
