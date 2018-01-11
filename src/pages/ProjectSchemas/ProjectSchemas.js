import React from 'react';
import SchemeForm from '../../components/SchemeForm/SchemeForm';
import Button from '../../components/Button';

const ProjectSchemas = () => (
	<div className="project-schemas page">
		<Button className="is-outlined" iconHelpClass="is-small" iconClassName="fa-plus">Add Scheme</Button>
		<SchemeForm projectName="personal"/>
	</div>
);

export default ProjectSchemas;