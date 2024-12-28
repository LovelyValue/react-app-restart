import { useState } from 'react';
import './Button.css';

function Button() {
	// let text = 'Сохранить';
	const [text, setText] = useState('Сохранить');
	console.log('Rerender');

	const clicked = () => {
		setText(t => t + '!');
		console.log(text);
	};
	return (
		<button onClick={clicked} className='button accent'>
			{text}
		</button>
	);
}

export default Button;
