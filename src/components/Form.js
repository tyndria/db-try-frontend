import React from 'react';

const Form = ({title, children}) => (
	<div className="form">
		<nav className="panel">
			<p className="panel-heading">
				{title}
			</p>
			{children}
			<div className="field">
				<div className="control">
					<button className="button is-link">OK</button>
				</div>
			</div>
		</nav>
	</div>
);

export default Form;