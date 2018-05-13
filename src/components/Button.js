import React from 'react';
import classNames from 'classnames';

const Button = ({className, iconHelpClass, iconClassName, children, onClick, ...other}) => (
	<span className={classNames('button', className)} onClick={onClick} {...other}>
		{children && <span>{children}</span>}
		{iconHelpClass &&
		<span className={classNames('icon', iconHelpClass)}>
			<i className={classNames('fa', iconClassName)}/>
		</span>}
	</span>
);

export default Button;