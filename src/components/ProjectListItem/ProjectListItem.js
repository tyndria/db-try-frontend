import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import Button from '../Button';
import {Roles} from '../../constants/roles';
import './ProjectListItem.css';

const ProjectListItem = ({name, id, getStatistics, user}) => (
	<span className="project-list-item panel-block is-active">
		<Link to={{pathname: "/projectSchemas", state: {name, id}}}
			  className={classNames({'disabled': !(user && user.role !== Roles.Client)})}>
			<span className="panel-icon">
				<i className="fa fa-book"/>
			</span>{name}
		</Link>
		<Button className="is-link is-outlined" onClick={e => {e.stopPropagation(); getStatistics()}}>Run</Button>
	</span>
);

export default ProjectListItem;