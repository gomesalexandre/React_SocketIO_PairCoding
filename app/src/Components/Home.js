import React from 'react';
import {AppBar} from 'material-ui';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Room from './Room';
import Introduction from './Introduction';

class Home extends React.Component {
render() {

  return (
    <div>
      <AppBar
        titleStyle={{ lineHeight: 'normal' }}
        title={
          <div>
            <div style={{ marginTop: 10 }}>Full stack peer-programming app</div>
            <div style={{ fontSize: 'small', fontWeight: 300 }}>Built with React, Material UI, Express & Socket.IO</div>
          </div>
        }
      />
      <Router>
        <Switch>
          <Route exact path='/' component={Introduction}/>
          <Route path='/room/:number' component={Room}/>
        </Switch>
      </Router>
    </div>
  );
}
}

export default Home;
