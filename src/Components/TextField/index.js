import "./style.css";

const TextField = (props) => {
	const onTyped = (event) => {
		props.onChanged(event.target.value);
	};

	return (
		<div className='form-text'>
			<label>{props.label}</label>
			<input
				value={props.value}
				onChange={onTyped}
				required={props.require}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default TextField;
