import React from 'react';
import io from 'socket.io-client';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

import {Card, CardText} from 'material-ui';

const socket = io('localhost:3001');

class Room extends React.Component {
  constructor(props) {
  super(props)
  this.state = {}

  socket.on('receive code', payload => {
    console.log('New code received !', payload);
    this.updateFromSocket(payload);
  })
  }

  componentDidMount() {
    const roomNumber = this.props.match.params.number;
    this.setState({room : `Room ${roomNumber}`}, () => {
      socket.emit('room', this.state.room)
    });
  }

  updateFromSocket(payload) {
    this.setState({code: payload.newCode}, () => {
      console.log('New state', this.state);
    });
  }
  updateCodeInState(newText) {
    console.log('New text is', newText);
    this.setState({code: newText});

    socket.emit('coding', {
      room: this.state.room,
      newCode: newText
    })
  }


  render() {

    return (
    <div>
      <Card style={ {'width': '80%', 'margin': '0 auto'} }>
        <CardText>
          <h1>{this.state.room}</h1>
        </CardText>
        <AceEditor
          mode="javascript"
          theme='monokai'
          value={this.state.code}
          width='100%'
          onChange={newText => this.updateCodeInState(newText)}
        />
      </Card>
    </div>
    )}
}

export default Room;
