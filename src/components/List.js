import React from 'react';

const List = ({title, items}) => (
	<div className="list">
		<nav className="panel">
			<p className="panel-heading">
				{title}
			</p>
			{
				items.map((item, index) => (
					<a key={index} className="panel-block is-active">
						<span className="panel-icon">
						  <i className="fa fa-book"/>
						</span>
						{item.name}
					</a>
				))
			}
		</nav>
	</div>
);

export default List;