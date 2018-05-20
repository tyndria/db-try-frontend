import React, {Component} from 'react';

import './LogItem.css';

class LogItem extends Component {
    render() {
        const {timestamp, coll, method, query: queryString} = this.props;
        const query = JSON.parse(queryString);
        return (
          <div className="log">
              <span className="timestamp">{timestamp}{' '}</span>
              <span className="collection">{coll}{' '}</span>
              <span className="method">{method}{' '}</span>
              <span>{Object.keys(query).map((key) =>
                <div><span>{key}{': '}</span><span>{query[key].toString()}</span></div>
              )}{' '}</span>
          </div>
        );
    }
};

export default LogItem;