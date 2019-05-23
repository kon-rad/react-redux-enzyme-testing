import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Clue from 'components/Clue';

class Category extends Component {
  state = { clues: [] };

  componentDidMount() {
    console.log('props', this.props);
    fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`)
      .then(response => response.json())
      .then(json => this.setState({ clues: json }));
  }
  render() {
    return (
      <div>
        <Link className='link-home' to='/'><h4>Home</h4></Link>
        <h2>{this.props.category.title}</h2>
        {
          this.state.clues.map(clue => {
            return (
              <Clue key={clue.id} clue={clue} />
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('map stat', state);
  return { category: state.category };
}

export default connect(mapStateToProps, null)(Category);