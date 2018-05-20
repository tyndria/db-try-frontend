import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DebounceInput} from 'react-debounce-input';
import Button from '../Button';
import LogItem from '../LogItem/LogItem';

import {getLogs} from '../../redux/ducks/logs';

import './Logs.css'

class Logs extends Component {
  constructor() {
    super();

    this.state = {
      logToSearch: ''
    };
  }
  render() {
    const {logs, handleLoadLogs, projectId} = this.props
    const filteredSearch = logs.filter((log) => {
      return JSON.stringify(log).search(this.state.logToSearch) !== -1;
    });
    return (
      <div className="logs">
        {!!logs.length && <DebounceInput
          className="search"
          minLength={3}
          debounceTimeout={300}
          placeholder="Search..."
          onChange={({target: {value}}) => this.setState({logToSearch: value})} /> }
        {!!logs.length &&
          <div className="list">
            {filteredSearch.map((log) =>
              <LogItem {...log}/>
            )}
          </div>}

        {!logs.length &&
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
