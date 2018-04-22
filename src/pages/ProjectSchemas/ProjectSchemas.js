import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	deleteScheme,
	addEmptyScheme,
	addEmptyField,
	deleteField,
	saveScheme,
	updateField,
	loadData
} from "../../redux/ducks/projectSchemas";
import './ProjectSchemas.css';
import SchemeForm from '../../components/SchemeForm/SchemeForm';
import Button from '../../components/Button';

class ProjectSchemas extends Component {
	componentDidMount() {
		this.props.loadSchemas();
	}

  configure() {
    this.props.history.push({
      pathname: '/projectConfiguration',
      state: {}
    })
  }

	render() {
		const schemeFunctions = {
			deleteForm: this.props.deleteScheme,
			addField: this.props.addEmptyField,
			updateField: this.props.updateField,
			deleteField: this.props.deleteField,
			saveForm: this.props.saveScheme,
			configure: () => this.configure(),
		};
		const schemas = this.props.schemas;
		const project = this.props.location.state;
		return (
			<div className="project-schemas page">
				<span className="project-control is-flex">
					<span className="project-name"> {project.name}</span>
					<Button onClick={this.props.addEmptyScheme}
							className="add-scheme is-outlined"
							iconHelpClass="is-small"
							iconClassName="fa-plus">Add Scheme</Button>
				</span>
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

const mapDispatchToProps = (dispatch, {location}) => ({
	deleteScheme: (id) => dispatch(deleteScheme(id)),
	addEmptyScheme: () => dispatch(addEmptyScheme()),
	addEmptyField: (id) => dispatch(addEmptyField(id)),
	deleteField: (schemeId, fieldId) => dispatch(deleteField(schemeId, fieldId)),
	updateField: (schemeId, fieldId, field) => dispatch(updateField(schemeId, fieldId, field)),
	saveScheme: (schemeId, name) => dispatch(saveScheme(location.state.id, schemeId, name)),
	loadSchemas: () => dispatch(loadData(location.state.id))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectSchemas);