import React from 'react';
import { connect } from 'react-redux';
import './Project.css';
import List from '../../components/List';
import Form from '../../components/Form';
import Input from '../../components/Input';
import ProjectListItem from '../../components/ProjectListItem/ProjectListItem';

const Projects = ({projects}) => (
	<div className="card project page">
		<div className="option-text">Or</div>
		<div className="columns project-panels">
			<div className="column project-panel">
				<Form title="Create Project">
					<Input placeholder="Project Name"/>
				</Form>
			</div>
			<div className="column">
				<List title="Choose Project">
					{
						projects.map((item, index) =>
							<ProjectListItem name={item.name} key={index}/>
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

});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);