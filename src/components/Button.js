import React from 'react';
import classNames from 'classnames';

const Button = ({className, iconHelpClass, iconClassName, children}) => (
	<span className={classNames('button', className)}>
		{children && <span>{children}</span>}
		{iconHelpClass &&
		<span className={classNames('icon', iconHelpClass)}>
			<i className={classNames('fa', iconClassName)}/>
		</span>}
	</span>
);

export default Button;