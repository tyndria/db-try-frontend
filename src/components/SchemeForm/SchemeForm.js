import React from 'react';
import Input from '../Input';
import SchemeField from '../SchemeField/SchemeField.js';
import Button from '../Button';

const SchemeForm = ({projectName}) => (
	<div className="scheme-form card">
		<div className="card-header">
			<p className="card-header-title">
				{projectName}
			</p>
			<a href="#" className="card-header-icon" aria-label="more options">
				<span className="icon">
					<i className="fa fa-trash" aria-hidden="true"/>
				</span>
			</a>
		</div>
		<div className="card-content">
			<Input placeholder="Scheme Name"/>
			<SchemeField/>
			<Button className="is-outlined" iconHelpClass="is-small" iconClassName="fa-plus">Add Field</Button>
		</div>
	</div>
);

export default SchemeForm;