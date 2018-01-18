import React from 'react';
import TextField from 'material-ui/TextField';

export default _ => ( // props arg not needed, thus the use of underscore
  <div>
    <p>This is a simple pair-programming app !</p>
    <TextField
      type='number'
      hintText='Choose a room to join'
    />
  </div>
);
