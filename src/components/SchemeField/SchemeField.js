import React from 'react';
import Input from '../Input';
import Button from '../Button';
import './SchemeField.css';

const TYPES = ['String', 'Number', 'Boolean', 'Object', 'Id'];

class SchemeField extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.name || '',
			type: props.type || 'String'
		};
	}

	onNameChange(e) {
		this.setState({name: e.target.value}, () => {
			this.props.onChange(this.state);
		});
	}

	onTypeChange(e) {
		this.setState({type: e.target.value}, () => {
			this.props.onChange(this.state);
		});
	}

	render() {
		const {name, id, type, deleteField} = this.props;
		return (
			<div className="scheme-field">
				<Input placeholder="Field Name" value={name} onChange={(e) => this.onNameChange(e)}/>
				<div className="type field is-horizontal">
					<div className="field-label">
						<label className="label">Type</label>
					</div>
					<div className="field-body">
						<div className="select">
							<select value={type} onChange={(e) => this.onTypeChange(e)}>
								{TYPES.map((type) => (
									<option>{type}</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<Button onClick={() => deleteField(id)} className="remove-field is-white" iconHelpClass="is-small" iconClassName="fa-times"/>
			</div>
		);
	}
}

export default SchemeField;