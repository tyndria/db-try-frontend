import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button';
import './ProjectListItem.css';

const ProjectListItem = ({name, id, getStatistics}) => (
	<span className="project-list-item panel-block is-active">
		<Link to={{pathname: "/projectSchemas", state: {name, id}}}>
			<span className="panel-icon">
				<i className="fa fa-book"/>
			</span>{name}
		</Link>
		<Button className="is-link is-outlined" onClick={e => {e.stopPropagation(); getStatistics()}}>Run</Button>
	</span>
);

export default ProjectListItem;