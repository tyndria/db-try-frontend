import React from 'react';
import './ProjectListItem.css';

const ProjectListItem = ({name}) => (
	<a className="project-list-item panel-block is-active">
		<span>
			<span className="panel-icon">
				<i className="fa fa-book"/>
			</span>{name}
		</span>
		<button className="button is-link is-outlined">Run</button>
	</a>
);

export default ProjectListItem;