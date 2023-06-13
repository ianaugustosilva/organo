import { useState } from "react";
import Banner from "./Components/Banner";
import Form from "./Components/Form";
import { Team } from "./Components/Team";

function App() {
	const teams = [
		{
			name: "Programação",
			primaryColor: "#57C278",
			secondColor: "#D9F7E9",
		},
		{
			name: "Developers Front-end",
			primaryColor: "#82cffa",
			secondColor: "#e8f8ff",
		},
		{
			name: "Data Science",
			primaryColor: "#A6D157",
			secondColor: "#F0F8E2",
		},
		{
			name: "Devops",
			primaryColor: "#E06B69",
			secondColor: "#FDE7E9",
		},
		{
			name: "UI/UX",
			primaryColor: "#DB6EBF",
			secondColor: "#FAE9F5",
		},
		{
			name: "QA\bs",
			primaryColor: "#FF8A29",
			secondColor: "#FFEEDF",
		},
		{
			name: "Mobile",
			primaryColor: "#FFBA05",
			secondColor: "#FFF5D9",
		},
	];

	const [collaborators, setCollaborators] = useState([]);

	const toNewCollaboratorAdded = (collaborator) => {
		console.log(collaborator);
		setCollaborators([...collaborators, collaborator]);
	};

	return (
		<div className='App'>
			<Banner />
			<Form
				teams={teams.map((team) => team.name)}
				toNewCollaboratorAdded={(collaborator) =>
					toNewCollaboratorAdded(collaborator)
				}
			/>
			{teams.map((team) => (
				<Team
					key={team.name}
					name={team.name}
					primaryColor={team.primaryColor}
					secondaryColor={team.secondColor}
					collaborators={collaborators.filter(
						(collaborator) => collaborator.team === team.name
					)}
				/>
			))}
		</div>
	);
}
export default App;
