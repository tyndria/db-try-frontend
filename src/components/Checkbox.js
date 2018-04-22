import React from 'react';
import classnames from 'classnames';

const Checkbox = ({onChange, label, checked, className}) => (
  <div className={classnames('field', className)}>
    <label className="checkbox">
      <input type="checkbox" onChange={onChange} checked={checked} />
      {label}
    </label>
  </div>
);

export default Checkbox;