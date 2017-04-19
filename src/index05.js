import React from 'react';
import PropTypes from 'prop-types';

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(...nextProps);
  }

  handleClick() {
    this.setState({
      title: 'Clicked'
    });
  }

  render() {
    const {title} = this.state;
    return (
      <button onClick={this.handleClick} title={title}>{title}</button>
    );
  }
}

MyComponent.propTypes = {
  title: PropTypes.string.isRequired
};
