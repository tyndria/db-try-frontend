import React from 'react';
import './Project.css';
import List from '../../components/List';
import Form from '../../components/Form';
import Input from '../../components/Input';

const Projects = () => (
	<div className="card project page">
		<div className="option-text">Or</div>
		<div className="columns project-panels">
			<div className="column project-panel">
				<Form title="Create Project">
					<Input label="Project Name" placeholder="Name"/>
				</Form>
			</div>
			<div className="column">
				<List title="Choose Project" items={[{name: 'personal'}, {name: 'city'}]} />
			</div>
		</div>
	</div>
);

export default Projects;