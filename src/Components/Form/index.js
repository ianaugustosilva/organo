import { Button } from "../Button";
import TextField from "../TextField";
import DropdownList from "../DropdownList";
import "./style.css";
import { useState } from "react";

const Form = (props) => {
	const [name, setName] = useState("");
	const [role, setRole] = useState("");
	const [image, setImage] = useState("");
	const [team, setTeam] = useState("");

	const onSave = (event) => {
		event.preventDefault();
		props.toNewCollaboratorAdded({
			name,
			role,
			image,
			team,
		});
	};

	return (
		<section className='form-content'>
			<form onSubmit={onSave}>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<TextField
					require={true}
					label='Nome'
					placeholder='Digite seu nome'
					value={name}
					onChanged={(value) => setName(value)}
				/>
				<TextField
					require={true}
					label='Cargo'
					placeholder='Digite seu cargo'
					value={role}
					onChanged={(value) => setRole(value)}
				/>
				<TextField
					label='Image'
					placeholder='Digite a URL da imagem'
					value={image}
					onChanged={(value) => setImage(value)}
				/>
				<DropdownList
					require={true}
					label='Time'
					items={props.teams}
					value={team}
					onChanged={(value) => setTeam(value)}
				/>
				<Button>Criar card</Button>
			</form>
		</section>
	);
};

export default Form;
