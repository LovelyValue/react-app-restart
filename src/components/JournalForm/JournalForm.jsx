import { useState } from 'react';
import Button from '../Button/Button';
import './JournalForm.css';

function JournalForm() {
	const [inputData, setInputData] = useState('');

	const inputChange = event => {
		setInputData(event.target.value);
		console.log(inputData);
	};

	// const [state, setState] = useState({
	// 	age: 40,
	// });

	// const [state2, setState2] = useState([1, 2, 3]);

	const addJournalItem = e => {
		e.preventDefault();

		// state.age = state.age + 1;
		// setState({ ...state });

		// state2.push(5);

		// setState2([...state2]);

		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};

	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			{/* {state.age}
			{state2} */}
			<input type='text' name='title' />
			<input type='date' name='date' />
			<input type='text' name='tag' value={inputData} onChange={inputChange} />
			<textarea name='post' id='' cols={30} rows={10}></textarea>
			<Button
				text='Сохранить'
				onClick={() => {
					console.log('Click');
				}}
			/>
		</form>
	);
}

export default JournalForm;
