import React from 'react';
import {connect} from 'react-redux';
import {addProject, fetchAll, runProject} from "../../redux/ducks/projectList";
import './Project.css';
import List from '../../components/List/List';
import Form from '../../components/Form';
import Input from '../../components/Input';
import ProjectListItem from '../../components/ProjectListItem/ProjectListItem';

class Projects extends React.Component {
  componentDidMount() {
    this.props.fetchAll();
  }

  runProject() {
    this.props.history.push({
      pathname: '/projectStatistics',
      state: {}
    })
  }

  render() {
    const {addProject, projects, runProject} = this.props;
    return (
      <div className="card project page">
        <div className="option-text">Or</div>
        <div className="columns project-panels">
          <div className="column project-panel">
            <Form title="Create Project" onClick={() => addProject(this.name)}>
              <Input onChange={(event) => this.name = event.target.value}
                     placeholder="Project Name"/>
            </Form>
          </div>
          <div className="column">
            <List title="Choose Project">
              {
                projects.map((item) =>
                  <ProjectListItem name={item.name}
                                   key={item.id}
                                   id={item.id}
                                   getStatistics={e => this.runProject(item.id)}/>
                )
              }
            </List>
          </div>
        </div>
      </div>
    );
  }
}
;

const mapStateToProps = state => ({
  projects: state.projectList.projects
});

const mapDispatchToProps = dispatch => ({
  addProject: (name) => dispatch(addProject(name)),
  fetchAll: () => dispatch(fetchAll()),
  // runProject: (projectId) => dispatch(runProject(projectId)) // TODO: prepare backend for running project
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);