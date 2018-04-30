import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input';

class RequestBox extends Component {
  constructor() {
    super();

    this.state = {
      doAction: true,
      doById: true,
    }

    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleDoActionChange = this.handleDoActionChange.bind(this);
    this.handleByIdChange = this.handleByIdChange.bind(this);
  }

  toggleCheckbox(name, callback) {
    this.setState((prevState) => ({
      [name]: !prevState[name]
    }), callback)
  }

  handleDoActionChange() {
    this.toggleCheckbox('doAction', () => this.props.onAllowChange(this.state.doAction));
  }

  handleByIdChange() {
    this.toggleCheckbox('doById', () => this.props.onByIdChange(this.state.doById));
  }

  render() {
    const {label, onFieldChange, showActionControlPanel} = this.props;
    const {doAction, doById} = this.state;

    return (
      <div className="tile is-child box">
        <Checkbox labelClassName="is-size-4" onChange={this.handleDoActionChange} label={label} checked={doAction} />
        {showActionControlPanel && <div className="action-field">
          <Checkbox
            className="margin-auto use-id"
            onChange={this.handleByIdChange}
            label="By id"
            checked={doById}
            disabled={!doAction}
          />
          <span className="has-text-primary margin-auto">or</span>
          <Input placeholder="By field" className="field-name" onChange={onFieldChange} disabled={!doAction || doById} />
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
}

RequestBox.defaultProps = {
  showActionControlPanel: true,
  onByIdChange: () => {},
  onFieldChange: () => {},
}

export default RequestBox;