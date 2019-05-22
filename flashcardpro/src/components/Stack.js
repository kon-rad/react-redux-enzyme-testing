import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './Card';

class Stack extends Component {

  render() {
    const { title, cards } = this.props;
    return (
      <div>
        <Link to="/">Home</Link>
        <h3>{title}</h3>
        {
          cards.map(card => {
            <Card card={card} />
          })
        }
      </div>
    )
  }
}
function mapStateToProps({ stack }) {
  return { stack };
}

export default connect(null, mapStateToProps)(Stack);