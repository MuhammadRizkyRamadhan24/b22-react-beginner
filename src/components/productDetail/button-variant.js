import React, { Component } from 'react';
import '../../styles/page-productDetail.css';
// eslint-disable-next-line react/prefer-stateless-function
class Button extends Component {
  render() {
    return (
      <>
        <button type="button" onClick={this.props.func} className="rounded-full w-16 h-16 mt-5 mb-3 mx-3 font-bold text-xl productDetail-btn focus:outline-none productDetail-bg-yellow">{this.props.variant}</button>
      </>
    );
  }
}

export default Button;
