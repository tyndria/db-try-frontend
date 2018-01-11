import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSchemas } from "../../redux/ducks/projectSchemas";
import './ProjectSchemas.css';
import SchemeForm from '../../components/SchemeForm/SchemeForm';
import Button from '../../components/Button';
import uuidv4 from 'uuid/v4';

class ProjectSchemas extends Component {
	constructor(props) {
		super(props);

		this.state = {
			schemas: props.schemas['345345']
		};

		this.addEmptyScheme = this.addEmptyScheme.bind(this);
	}

	addEmptyScheme() {
		this.setState((prevState) => ({
			schemas: [...prevState.schemas, {name: '', fields: [{id: 1, name: '', type: ''}], id: uuidv4()}]
		}));
	}

	render() {
		return (
			<div className="project-schemas page">
				<Button onClick={this.addEmptyScheme} className="add-scheme is-outlined" iconHelpClass="is-small" iconClassName="fa-plus">Add Scheme</Button>
				<div className="schemas-container columns">
					{
						this.state.schemas.map((scheme) =>
							<SchemeForm key={scheme.id} className="column" {...scheme}/>
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
	getSchemas: (id) => dispatch(getSchemas(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectSchemas);