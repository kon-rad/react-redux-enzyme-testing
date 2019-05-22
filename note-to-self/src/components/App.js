import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = 'NOTES';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      notes: []
    }
  }
  componentDidMount() {
    this.setState({ notes: read_cookie(cookie_key) });
  }

  submit = () => {
    const { notes, text } = this.state;
    this.setState({ notes: [...notes, { text }] });
    bake_cookie(cookie_key, this.state.notes);
  };

  clear = () => {
    this.setState({ notes: [] });
    // delete_cookie(cookie_key);
  };

  render() {
    return (
      <div>
        <h1>Note to Self</h1>
        <Form inline>
          <FormControl onChange={e => this.setState({ text: e.target.value })} />
          {' '}
          <Button onClick={this.submit}>Submit</Button>
        </Form>
        {
          this.state.notes.map((note, i) => {
            return (
              <Note key={i} note={note} />
            )
          })
        }
        <hr />
        <Button onClick={this.clear}>Clear Notes</Button>
      </div>
    )
  }
}