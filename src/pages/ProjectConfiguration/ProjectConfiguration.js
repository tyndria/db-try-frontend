import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {changeField, getSchemeConfig} from '../../redux/ducks/schemeConfiguration';

import Input from '../../components/Input';
import RequestBox from '../../components/RequestBox/RequestBox';

import './ProjectConfiguration.css';

class ProjectConfiguration extends Component {
  render() {
    const {changeField, initialValues: {dataCount, loopCount, create, read, update, remove, populate}} = this.props;

    return (<div className="configuration page">
      <div className="columns is-marginless">
        <div className="column box">
          <div className="subtitle has-text-primary has-text-weight-semibold">Requests</div>
          <div className="tile is-ancestor">
            <div className="tile is-parent is-3">
              <RequestBox
                label="Create"
                showActionControlPanel={false}
                initialValues={populate}
                onAllowChange={value => changeField('populate.allow', value)}
              />
            </div>
            <div className="tile is-parent is-3">
              <RequestBox
                label="Populate"
                showActionControlPanel={false}
                initialValues={create}
                onAllowChange={value => changeField('create.allow', value)}
              />
            </div>
            <div className="tile is-parent is-6">
              <RequestBox
                label="Read"
                initialValues={read}
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
                initialValues={remove}
                onByIdChange={value => changeField('remove.byId', value)}
                onAllowChange={value => changeField('remove.allow', value)}
                onFieldChange={e => changeField('remove.field', e.target.value)}
              />
            </div>
            <div className="tile is-parent">
              <RequestBox
                label="Update"
                initialValues={update}
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
            value={dataCount}
            label="Initial data count"
            hintText="The volume of initial data"
            onChange={e => changeField('dataCount', e.target.value)}
          />
          <Input
            type="number"
            value={loopCount}
            label="Loop count"
            hintText="Each of the request will be executed n times"
            onChange={e => changeField('loopCount', e.target.value)}
          />
        </div>
      </div>
    </div>);
  };
}

const mapStateToProps = (state, {location: {state: {schemeId, projectId}}}) => ({
  initialValues: getSchemeConfig(state, projectId, schemeId),
});

const mapDispatchToProps = (dispatch, {location: {state: {schemeId, projectId}}})=> ({
 changeField: (path, value) => dispatch(changeField({projectId, schemeId, path, value}))
});

ProjectConfiguration.propTypes = {
  changeField: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
}

ProjectConfiguration.defaultProps = {
  initialValues: {},
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectConfiguration);