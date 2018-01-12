import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteScheme, addEmptyScheme } from "../../redux/ducks/projectSchemas";
import './ProjectSchemas.css';
import SchemeForm from '../../components/SchemeForm/SchemeForm';
import Button from '../../components/Button';

class ProjectSchemas extends Component {
	constructor(props) {
		super(props);

		this.addField = this.addField.bind(this);
		this.deleteField = this.deleteField.bind(this);
	}

	addField(formId) {
		console.log('add  field', formId);
	}

	deleteField(fieldId, formId) {
		console.log('delete field ', fieldId, formId);
	}

	render() {
		const schemeFunctions = {deleteForm: this.props.deleteScheme, addField: this.addField, deleteField: this.deleteField};
		const schemas = this.props.schemas;
		return (
			<div className="project-schemas page">
				<Button onClick={this.props.addEmptyScheme} className="add-scheme is-outlined" iconHelpClass="is-small" iconClassName="fa-plus">Add Scheme</Button>
				<div className="schemas-container columns">
					{
						Object.keys(schemas).map((schemeId) =>
							<SchemeForm key={schemeId}
										id={schemeId}
										className="column" {...{ ...schemeFunctions, ...schemas[schemeId]}}/>
						)
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	schemas: state.projectSchemas.schemas
});

const mapDispatchToProps = dispatch => ({
	deleteScheme: (id) => dispatch(deleteScheme(id)),
	addEmptyScheme: () => dispatch(addEmptyScheme())
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectSchemas);