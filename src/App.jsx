import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

const INITIAL_DATA = [
	// { id: 1, title: 'Приключение', date: new Date(), text: 'Какой-то текст' },
	// { id: 2, title: 'Приключение', date: new Date(), text: 'Какой-то текст' },
];

function App() {
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item => {
		setItems(oldItems => [
			...oldItems,
			{
				text: item.post,
				title: item.title,
				date: new Date(item.date),
				id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1,
			},
		]);
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList items={items}></JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div>
	);
}

export default App;
