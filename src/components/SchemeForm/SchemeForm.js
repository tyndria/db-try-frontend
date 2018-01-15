import React from 'react';
import Input from '../Input';
import SchemeField from '../SchemeField/SchemeField.js';
import Button from '../Button';

const SchemeForm = ({name, id, fields, deleteForm, addField, deleteField}) => (
	<div className="scheme-form card">
		<div className="card-header">
			<a onClick={() => deleteForm(id)} className="card-header-icon" aria-label="more options">
				<span className="icon">
					<i className="fa fa-trash" aria-hidden="true"/>
				</span>
			</a>
		</div>
		<div className="card-content">
			<Input placeholder="Scheme Name" value={name}/>
			{
				fields && Object.keys(fields).map((fieldId) =>
					<SchemeField key={fieldId}
								 id={fieldId}
								 deleteField={(fieldId) => deleteField(id, fieldId)}
								 {...fields[fieldId]}/>
				)
			}
			<Button onClick={() => addField(id)}
					className="is-outlined"
					iconHelpClass="is-small"
					iconClassName="fa-plus">
				Add Field
			</Button>
		</div>
	</div>
);

export default SchemeForm;