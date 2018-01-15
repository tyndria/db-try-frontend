import React from 'react';
import { connect } from 'react-redux';
import { addProject } from "../../redux/ducks/projectList";
import './Project.css';
import List from '../../components/List';
import Form from '../../components/Form';
import Input from '../../components/Input';
import ProjectListItem from '../../components/ProjectListItem/ProjectListItem';

const Projects = ({projects, addProject, ...props}) => (
	<div className="card project page">
		<div className="option-text">Or</div>
		<div className="columns project-panels">
			<div className="column project-panel">
				<Form title="Create Project" onClick={() => addProject(this.name)}>
					<Input onChange={(event) => this.name = event.target.value }
						   placeholder="Project Name"/>
				</Form>
			</div>
			<div className="column">
				<List title="Choose Project">
					{
						projects.map((item, index) =>
							<ProjectListItem name={item.name} key={index} getStatistics={e => {props.history.push({
								pathname: '/projectStatistics',
								state: {}
							})}}/>
						)
					}
				</List>
			</div>
		</div>
	</div>
);

const mapStateToProps = state => ({
	projects: state.projectList.projects
});

const mapDispatchToProps = dispatch => ({
 	addProject: (name) => dispatch(addProject(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);