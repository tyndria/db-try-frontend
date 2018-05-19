import React from 'react';

import './LogItem.css';

const LogItem = ({coll, doc, method, query, timestamp}) => (
  <div className="log">
    <span className="timestamp">{timestamp}{' '}</span>
    <span className="collection">{coll}{' '}</span>
    <span className="method">{method}{' '}</span>
    <span>{query}{' '}</span>
    <span>{doc}</span>
  </div>
);

export default LogItem;