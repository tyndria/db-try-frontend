import React from 'react';
import Input from '../Input';
import SchemeField from '../SchemeField/SchemeField';

const SchemeForm = ({projectName}) => (
	<div className="scheme-form card">
		<div className="card-header">
			<span>{projectName}</span>
			<Input placeholder="Scheme Name"/>
		</div>
		<div className="card-content">
			<SchemeField/>
		</div>
	</div>
);

export default SchemeForm;