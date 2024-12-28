import './Button.css';

function Button() {
	let text = 'Сохранить';
	const clicked = () => {
		text = 'Закрыть';
		console.log(text);
		console.log('Hello');
	};
	return (
		<button onClick={clicked} className='button accent'>
			{text}
		</button>
	);
}

export default Button;
