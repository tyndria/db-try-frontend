import React from 'react';
import classNames from 'classnames';

const Input = ({
   label,
   type,
   value,
   hintText,
   successClass,
   leftIconClass,
   rightIconClass,
   className,
   autoFocus,
   ...rest
 }) => (
  <div className={classNames('field', className)}>
    { label && <label className="label">{label}</label> }
    <div className={classNames('control', {'has-icons-left': leftIconClass, 'has-icons-right': rightIconClass})}>
      <input className={classNames('input', successClass)}
             type={type || 'text'}
             defaultValue={value}
             autoFocus={autoFocus}
             {...rest} />
      {
        leftIconClass &&
        <span className="icon is-small is-left">
				  <i className={classNames('fa', leftIconClass)}/>
				</span>
      }
      {
        rightIconClass &&
        <span className="icon is-small is-right">
				  <i className={classNames('fa', rightIconClass)}/>
				</span>
      }
    </div>
    {
      hintText && <p className={classNames('help', successClass)}>{hintText}</p>
    }
  </div>
);

export default Input;