import Collaborator from "../Collaborator";
import "./style.css";

export const Team = (props) => {
	const secondaryColor = { backgroundColor: props.secondaryColor };
	const borderColor = { borderColor: props.primaryColor };

	return (
		<section className='team' style={secondaryColor}>
			<h3 style={borderColor}>{props.name}</h3>
			<div className='collaborators'>
				{props.collaborators.map((collaborator) => (
					<Collaborator
						name={collaborator.name}
						role={collaborator.role}
						image={collaborator.image}
					/>
				))}
			</div>
		</section>
	);
};
