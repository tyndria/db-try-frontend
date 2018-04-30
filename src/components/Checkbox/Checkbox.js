import React from 'react';
import classnames from 'classnames';

import './Checkbox.css';

const Checkbox = ({onChange, label, checked, disabled, className, labelClassName}) => (
  <div className={classnames('field', className)}>
    <label className={classnames('checkbox', labelClassName)} disabled={disabled}>
      <input type="checkbox" onChange={onChange} checked={checked} disabled={disabled} />
      {label}
    </label>
  </div>
);

export default Checkbox;