import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input';

class RequestBox extends Component {
  constructor(props) {
    super(props);

    const {allow = true, byId = true} = this.props.initialValues;

    this.state = {
      allow,
      byId,
    }

    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleAllowChange = this.handleAllowChange.bind(this);
    this.handleByIdChange = this.handleByIdChange.bind(this);
  }

  toggleCheckbox(name, callback) {
    this.setState((prevState) => ({
      [name]: !prevState[name]
    }), callback)
  }

  handleAllowChange() {
    this.toggleCheckbox('allow', () => this.props.onAllowChange(this.state.allow));
  }

  handleByIdChange() {
    this.toggleCheckbox('byId', () => this.props.onByIdChange(this.state.byId));
  }

  render() {
    const {label, onFieldChange, showActionControlPanel, initialValues: {field}} = this.props;
    const {allow, byId} = this.state;

    return (
      <div className="tile is-child box">
        <Checkbox labelClassName="is-size-4" onChange={this.handleAllowChange} label={label} checked={allow} />
        {showActionControlPanel && <div className="action-field">
          <Checkbox
            className="margin-auto use-id"
            onChange={this.handleByIdChange}
            label="By id"
            checked={byId}
            disabled={!allow}
          />
          <span className="has-text-primary margin-auto">or</span>
          <Input
            placeholder="By field"
            className="field-name"
            value={field}
            onChange={onFieldChange}
            disabled={!allow || byId}
          />
        </div>}
      </div>
    )
  }
}

RequestBox.propTypes = {
  label: PropTypes.string.isRequired,
  onAllowChange: PropTypes.func.isRequired,
  onByIdChange: PropTypes.func,
  onFieldChange: PropTypes.func,
  showActionControlPanel: PropTypes.bool,
  initialValues: PropTypes.object,
}

RequestBox.defaultProps = {
  initialValues: {},
  showActionControlPanel: true,
  onByIdChange: () => {},
  onFieldChange: () => {},
}

export default RequestBox;