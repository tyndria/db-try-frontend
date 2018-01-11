import React from 'react';
import Button from './Button';

const Form = ({title, children}) => (
	<div className="form">
		<nav className="panel">
			<p className="panel-heading">
				{title}
			</p>
			{children}
			<div className="field">
				<div className="control">
					<Button className="is-link">OK</Button>
				</div>
			</div>
		</nav>
	</div>
);

export default Form;