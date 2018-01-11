import React from 'react';
import { connect } from 'react-redux';
import { getSchemas } from "../../redux/ducks/projectSchemas";
import './ProjectSchemas.css';
import SchemeForm from '../../components/SchemeForm/SchemeForm';
import Button from '../../components/Button';

const ProjectSchemas = ({schemas}) => (
	<div className="project-schemas page">
		<Button className="add-scheme is-outlined" iconHelpClass="is-small" iconClassName="fa-plus">Add Scheme</Button>
		<div className="schemas-container columns">
			{
				schemas['345345'].map((scheme) =>
					<SchemeForm key={scheme.id} className="column" {...scheme}/>
				)
			}
		</div>
	</div>
);

const mapStateToProps = state => ({
	schemas: state.projectSchemas.schemas
});

const mapDispatchToProps = dispatch => ({
	getSchemas: (id) => dispatch(getSchemas(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectSchemas);