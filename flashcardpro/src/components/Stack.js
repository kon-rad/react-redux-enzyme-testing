import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Stack extends Component {

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h3>title here</h3>
      </div>
    )
  }
}
function mapStateToProps({ stack }) {
  return { stack };
}

export default connect(null, mapStateToProps)(Stack);