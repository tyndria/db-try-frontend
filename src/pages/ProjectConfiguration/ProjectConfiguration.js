import React, {Component} from 'react';

import './ProjectConfiguration.css';

import Checkbox from '../../components/Checkbox/Checkbox';
import Input from '../../components/Input';

class ProjectConfiguration extends Component {
  renderActionFieldElement() {
    return (
      <div className="tile is-child box">
        <Checkbox labelClassName="is-size-4" onChange={() => {}} label="Read" checked={true} />
        <div className="action-field">
          <Checkbox
            className="margin-auto use-id"
            onChange={() => {
            }}
            label="By id"
            checked={true} />
          <span className="has-text-primary margin-auto">or</span>
          <Input placeholder="By field" className="field-name" />
        </div>
      </div>
    )
  }

  render() {
    return (<div className="configuration page">
      <div className="columns is-marginless">
        <div className="column box">
          <div className="subtitle has-text-primary has-text-weight-semibold">Requests</div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child box">
                <Checkbox onChange={() => {
                }} label="Create" checked={true} />
              </div>
            </div>
            <div className="tile is-parent">
              {this.renderActionFieldElement()}
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              {this.renderActionFieldElement()}
            </div>
            <div className="tile is-parent">
              {this.renderActionFieldElement()}
            </div>
          </div>
        </div>
        <div className="column box is-4">
          <p className="subtitle has-text-primary has-text-weight-semibold">Collections/Tables</p>
          <Input type="number" label="Initial data count" hintText="The volume of initial data" />
          <Input type="number" label="Loop count" hintText="Each of the request will be executed n times" />
        </div>
      </div>
    </div>);
  };
}

export default ProjectConfiguration;