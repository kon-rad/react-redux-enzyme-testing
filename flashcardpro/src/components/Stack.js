import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card';

export const Stack = ({ stack: { title, cards } }) => {
  return (
    <div>
      <Link className='link-home' to="/">Home</Link>
      <h3>{title}</h3>
      <br />
      {cards.map(card => <Card key={card.id} card={card} />)}
    </div>
  )
}

function mapStateToProps(state) {
  return { stack: state.stack };
}

export default connect(mapStateToProps, null)(Stack);