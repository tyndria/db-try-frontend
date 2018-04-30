import React, {Component} from 'react';
import {connect} from 'react-redux';

import {changeField} from '../../redux/ducks/schemeConfiguration';

import Input from '../../components/Input';
import RequestBox from '../../components/RequestBox/RequestBox';

import './ProjectConfiguration.css';

class ProjectConfiguration extends Component {

  render() {
    const {changeField} = this.props;

    return (<div className="configuration page">
      <div className="columns is-marginless">
        <div className="column box">
          <div className="subtitle has-text-primary has-text-weight-semibold">Requests</div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <RequestBox
                label="Create"
                showActionControlPanel={false}
                onAllowChange={value => changeField('create.allow', value)}
              />
            </div>
            <div className="tile is-parent">
              <RequestBox
                label="Read"
                onByIdChange={value => changeField('read.byId', value)}
                onAllowChange={value => changeField('read.allow', value)}
                onFieldChange={e => changeField('read.field', e.target.value)}
              />
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <RequestBox
                label="Delete"
                onByIdChange={value => changeField('remove.byId', value)}
                onAllowChange={value => changeField('remove.allow', value)}
                onFieldChange={e => changeField('remove.field', e.target.value)}
              />
            </div>
            <div className="tile is-parent">
              <RequestBox
                label="Update"
                onByIdChange={value => changeField('update.byId', value)}
                onAllowChange={value => changeField('update.allow', value)}
                onFieldChange={e => changeField('update.field', e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="column box is-4">
          <p className="subtitle has-text-primary has-text-weight-semibold">Collections/Tables</p>
          <Input
            type="number"
            label="Initial data count"
            hintText="The volume of initial data"
            onChange={e => changeField('dataCount', e.target.value)}
          />
          <Input
            type="number"
            label="Loop count"
            hintText="Each of the request will be executed n times"
            onChange={e => changeField('loopCount', e.target.value)}
          />
        </div>
      </div>
    </div>);
  };
}

const mapDispatchToProps = (dispatch, {location: {state: {schemeId, projectId}}} )=> ({
 changeField: (path, value) => dispatch(changeField({projectId, schemeId, path, value}))
});

export default connect(null, mapDispatchToProps)(ProjectConfiguration);