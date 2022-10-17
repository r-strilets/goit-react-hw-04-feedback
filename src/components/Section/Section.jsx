import { Component } from 'react';
import { PropTypes } from 'prop-types';
export class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  };
  render() {
    const { title, children } = this.props;
    return (
      <>
        {<h2>{title}</h2>}
        {children}
      </>
    );
  }
}
