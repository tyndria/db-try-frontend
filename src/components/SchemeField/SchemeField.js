import React from 'react';
import Input from '../Input';
import Button from '../Button';
import './SchemeField.css';

const SchemeField = () => (
	<div className="scheme-field">
		<Input placeholder="Field Name" />
		<div className="type field is-horizontal">
			<div className="field-label">
				<label className="label">Type</label>
			</div>
			<div className="field-body">
				<div className="select">
					<select>
						<option>String</option>
						<option>Number</option>
						<option>Boolean</option>
						<option>Object</option>
					</select>
				</div>
			</div>
		</div>
		<Button className="remove-field is-white" iconHelpClass="is-small" iconClassName="fa-times"/>
	</div>
);

export default SchemeField;