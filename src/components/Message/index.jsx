/* eslint-disable react/prop-types */
// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// helper functions
import classNames from 'utils/classnames';
import connect from 'utils/connect';
import { clearAlertMessage } from 'modules/message';

// styles
import './Message.scss';

class Message extends React.Component {
  static propTypes = {
    heading: PropTypes.string,
    messages: PropTypes.arrayOf(PropTypes.string),
    active: PropTypes.bool,
    error: PropTypes.bool,
    delay: PropTypes.number
  }

  static defaultProps = {
    messages: [],
    heading: '',
    error: false,
    active: false,
    delay: 4
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { active } = this.props;

    this.setState({ active });
  }

  componentDidUpdate() {
    const { active } = this.state;
    const { delay, clearAlertMessageDispatch } = this.props;

    if (active) {
      setTimeout(() => {
        this.setState({ close: true });
        clearAlertMessageDispatch();
      }, delay * 1000);
    }
  }

  static getDerivedStateFromProps(props, prevState) {
    const { message } = props;
    let { active } = props;

    active = message.active ? message.active : active;

    return prevState.close ? { active: false, close: false } : { active };
  }

  onMessageClose = () => this.setState({ close: true });

  render() {
    const {
 heading, messages, error, message: { message } 
} = this.props;
    const { active } = this.state;

    const classList = classNames('ui', { error }, 'message');

    return (
      <>
        { active && (
          <div className={classList}>
            <i role="presentation" className="close icon" onKeyPress={this.onMessageClose} onClick={this.onMessageClose} />
            <div className="header">
              {heading || message}
            </div>
            <ul className="list">
              {messages.map((msg) => <li key={msg}>{msg}</li>)}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default connect({ clearAlertMessageDispatch: clearAlertMessage })(Message);
