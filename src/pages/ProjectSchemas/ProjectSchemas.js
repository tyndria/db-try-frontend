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

  configure(schemeId) {
		const {history, location} = this.props;
    history.push({
      pathname: '/projectConfiguration',
      state: {schemeId, projectId: location.state.id}
    })
  }

	render() {
		const {deleteScheme, addEmptyField, updateField, deleteField, saveScheme, schemas, location, fields, user} = this.props;

		const otherProps = {
			deleteForm: deleteScheme,
			addField: addEmptyField,
			saveForm: saveScheme,
      updateField,
      deleteField,
			user,
		};

		const project = location.state;
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
										fields={fields[schemeId]}
										configure={() => this.configure(schemeId)}
										className="column" {...{ ...otherProps, ...schemas[schemeId]}}/>
						)
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	schemas: state.projectSchemas.schemas,
	fields: state.projectSchemas.fields,
  user: state.users.user
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