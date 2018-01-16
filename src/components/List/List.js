import React from 'react';
import './List.css';

const List = ({title, children}) => (
	<div className="list">
		<nav className="panel">
			<p className="panel-heading">
				{title}
			</p>
			<div className="items">
				{ children }
			</div>
		</nav>
	</div>
);

export default List;