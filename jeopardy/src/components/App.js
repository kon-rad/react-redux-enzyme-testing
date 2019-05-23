import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategories, pickCategory } from 'actions';
import { Link } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    if (this.props.categories.length !== 0) {
      return;
    }
    fetch('http://jservice.io/api/categories?count=20')
      .then(res => res.json())
      .then(json => this.props.setCategories(json));
  }
  render() {
    return (
      <div>
        <h1>jeopardy!</h1>
        {
          this.props.categories.map(cat => {
            return (
              <div key={cat.id}>
                <Link
                  to='/category'
                  onClick={() => this.props.pickCategory(cat)}
                >
                  <h4>{cat.title}</h4>
                </Link>
              </div>
            );
          })
        }
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log('stat', state);
  return { categories: state.categories };
}
export default connect(mapStateToProps, { setCategories, pickCategory })(App);