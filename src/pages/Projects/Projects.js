import React from 'react';
import {connect} from 'react-redux';
import {addProject, fetchAll} from '../../redux/ducks/projectList';
import {runProject} from '../../redux/ducks/projectStatistics';
import {Roles} from '../../constants/roles';
import './Project.css';
import List from '../../components/List/List';
import Form from '../../components/Form';
import Input from '../../components/Input';
import ProjectListItem from '../../components/ProjectListItem/ProjectListItem';

class Projects extends React.Component {
	componentDidMount() {
		this.props.fetchAll();
	}

	runProject(id) {
		this.props.runProject(id);

		this.props.history.push({
			pathname: '/projectStatistics',
			state: {projectId: id}
		})
	}

	render() {
		const {addProject, projects, user} = this.props;
		return (
			<div className="card project page">
				{ user && user.role !== Roles.Client &&
					<div className="option-text">Or</div>
				}
				<div className="columns project-panels">
					{ user && user.role !== Roles.Client &&
						<div className="column project-panel">
							<Form title="Create Project" onClick={() => addProject(this.name)}>
								<Input onChange={(event) => this.name = event.target.value}
									   placeholder="Project Name"/>
							</Form>
						</div>
					}
					<div className="column">
						<List title="Choose Project">
							{
								projects.map(({name, id}) =>
									<ProjectListItem name={name}
													 key={id}
													 id={id}
													 user={user}
													 getStatistics={e => this.runProject(id)}/>
								)
							}
						</List>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	projects: state.projectList.projects,
	user: state.users.user
});

const mapDispatchToProps = dispatch => ({
	addProject: (name) => dispatch(addProject(name)),
	fetchAll: () => dispatch(fetchAll()),
	runProject: (projectId) => dispatch(runProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);