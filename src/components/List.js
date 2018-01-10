import React from 'react';

const List = ({title, children}) => (
	<div className="list">
		<nav className="panel">
			<p className="panel-heading">
				{title}
			</p>
			{ children }
		</nav>
	</div>
);

export default List;