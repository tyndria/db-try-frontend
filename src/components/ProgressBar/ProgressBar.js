import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => (
	<ul className="progressbar">
		<li className="active">login</li>
		<li>create project</li>
		<li>add schemas</li>
		<li>run</li>
		<li>get statistics</li>
	</ul>
);

export default ProgressBar;