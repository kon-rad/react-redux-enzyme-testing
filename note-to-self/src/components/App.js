import React from 'react';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookie';
import { Form, FormControl, Button } from 'react-bootstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      notes: []
    }
  }

  submit = () => {
    const { notes, text } = this.state;
    this.setState({ notes: [...notes, { text }] });
  };

  render() {
    return (
      <div>
        <h1>Note to self</h1>
        <Form inline>
          <FormControl onChange={e => this.setState({ text: e.target.value })}>
          </FormControl>
          {' '}
          <Button onClick={this.submit()}>Submit</Button>
        </Form>
        {
          this.state.notes.map((note, i) => {
            return (
              <Note key={i} note={note} />
            )
          })
        }
      </div>
    )
  }
}