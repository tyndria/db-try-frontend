import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '../Button';
import LogItem from '../LogItem/LogItem';

import {getLogs} from '../../redux/ducks/logs';

import './Logs.css'

class Logs extends Component {
  render() {
    const {logs, handleLoadLogs, projectId} = this.props
    return (
      <div className="logs">
        <div className="list">
          {logs.map((log) =>
            <LogItem {...log}/>
          )}
        </div>

        {(!logs || !logs.length) &&
          <Button className="load-logs is-light" onClick={() => handleLoadLogs(projectId)}>Load logs</Button>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  logs: state.logs.data
});

const mapDispatchToProps = (dispatch) => ({
  handleLoadLogs: (projectId) => dispatch(getLogs(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Logs);
