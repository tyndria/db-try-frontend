import React from 'react';
import classNames from 'classnames';
import Input from '../Input';
import SchemeField from '../SchemeField/SchemeField.js';
import Button from '../Button';
import './SchemeForm.css';

class SchemeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name || ''
    };
  }

  render() {
    const {name, id, fields, deleteForm, addField, deleteField, saveForm, updateField, isSaved, isLoading} = this.props;
    return (
      <div className="scheme-form card">
        <div className="card-header">
          <Button onClick={() => saveForm(id, this.state.name)}
                  className={classNames('save-btn is-outlined', {'is-success': isSaved, 'is-loading': isLoading})}>
            Save
          </Button>
          <a onClick={() => deleteForm(id)} className="delete-icon card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fa fa-trash" aria-hidden="true"/>
            </span>
          </a>
        </div>
        <div className="card-content">
          <Input placeholder="Scheme Name" value={name} onChange={(e) => this.setState({name: e.target.value})}/>
          {
            fields && Object.keys(fields).map((fieldId) =>
              <SchemeField key={fieldId}
                           id={fieldId}
                           deleteField={(fieldId) => deleteField(id, fieldId)}
                           onChange={(value) => updateField(id, fieldId, value)}
                           {...fields[fieldId]}/>
            )
          }
          <Button onClick={() => addField(id)}
                  className="is-outlined"
                  iconHelpClass="is-small"
                  iconClassName="fa-plus">
            Add Field
          </Button>
        </div>
      </div>
    );
  }
}

export default SchemeForm;