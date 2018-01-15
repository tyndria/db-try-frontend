import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteScheme, addEmptyScheme, addEmptyField, deleteField } from "../../redux/ducks/projectSchemas";
import './ProjectSchemas.css';
import SchemeForm from '../../components/SchemeForm/SchemeForm';
import Button from '../../components/Button';

class ProjectSchemas extends Component {
	render() {
		const schemeFunctions = {
			deleteForm: this.props.deleteScheme, addField: this.props.addEmptyField, deleteField: this.props.deleteField};
		const schemas = this.props.schemas;
		return (
			<div className="project-schemas page">
				<Button onClick={this.props.addEmptyScheme}
						className="add-scheme is-outlined"
						iconHelpClass="is-small"
						iconClassName="fa-plus">Add Scheme</Button>
				<div className="schemas-container columns">
					{
						Object.keys(schemas).map((schemeId) =>
							<SchemeForm key={schemeId}
										id={schemeId}
										fields={this.props.fields[schemeId]}
										className="column" {...{ ...schemeFunctions, ...schemas[schemeId]}}/>
						)
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	schemas: state.projectSchemas.schemas,
	fields: state.projectSchemas.fields
});

const mapDispatchToProps = dispatch => ({
	deleteScheme: (id) => dispatch(deleteScheme(id)),
	addEmptyScheme: () => dispatch(addEmptyScheme()),
	addEmptyField: (id) => dispatch(addEmptyField(id)),
	deleteField: (schemeId, fieldId) => dispatch(deleteField(schemeId, fieldId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectSchemas);