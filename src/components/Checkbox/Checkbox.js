import React from 'react';
import classnames from 'classnames';

import './Checkbox.css';

const Checkbox = ({onChange, label, checked, className, labelClassName}) => (
  <div className={classnames('field', className)}>
    <label className={classnames('checkbox', labelClassName)}>
      <input type="checkbox" onChange={onChange} checked={checked} />
      {label}
    </label>
  </div>
);

export default Checkbox;