import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormControl, FormGroup, FormLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addStack } from 'actions';

class StackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      cards: []
    }
  }

  addCard = () => {
    const { cards } = this.state;
    this.setState({ cards: [ ...cards, {  id: cards.length, prompt: '', answer: '' } ]});
  };

  updateCardPart = (event, index, part) => {
    const newCards = this.state.cards.slice();
    newCards[index][part] = event.target.value;
    this.setState({ cards: newCards });
  };

  addStack = () => {
    const { cards } = this.state;
    this.setState({ cards: [ ...cards, {  id: cards.length, prompt: '', answer: '' } ]});
  };

  render() {
    return (
      <div>
        <Link to="/" className="link-home">
          <h4>Home</h4>
        </Link>
        <h4>Create a new stack</h4>
        <Form inline>
          <FormGroup>
            <FormLabel>Title</FormLabel>
            {' '}
            <FormControl onChange={event => this.setState({ title: event.target.value })}/>
          </FormGroup>
          {
            this.state.cards.map((card, index) => {
              return (
                <div key={card.id}>
                  <br />
                  <FormGroup>
                    <FormLabel>Prompt:</FormLabel>
                    {' '}
                    <FormControl
                      onChange={event => this.updateCardPart(event, index, 'prompt')}
                    />
                    {' '}
                    <FormLabel>Answer:</FormLabel>
                    {' '}
                    <FormControl
                      onChange={event => this.updateCardPart(event, index, 'answer')}
                    />
                  </FormGroup>
                </div>
              )
            })
          }
        </Form>
        <br />
        <Button onClick={this.addCard}>Add Card</Button>
        {' '}
        <Button onClick={this.addStack}>Save and Add Stack</Button>
      </div>
    )
  }
}

export default connect(null, { addStack })(StackForm);