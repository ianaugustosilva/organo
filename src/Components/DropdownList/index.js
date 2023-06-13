import "./DropdownList.css";

const DropdownList = (props) => {
	return (
		<div className='dropdown'>
			<label>{props.label}</label>
			<select
				onChange={(event) => props.onChanged(event.target.value)}
				required={props.require}
				value={props.value}
			>
				{props.items.map((items, index) => (
					<option key={index}>{items}</option>
				))}
			</select>
		</div>
	);
};

export default DropdownList;
