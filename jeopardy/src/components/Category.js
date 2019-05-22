import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Category extends Component {
  render() {
    return (
      <div>
        <Link className='link-home' to='/'><h4>Home</h4></Link>
        cat
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { category: state.category };
}

export default connect(null, null)(Category);