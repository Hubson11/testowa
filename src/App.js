import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Events from './events/Events';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Events} />
        <Route path="/about" render={() => <p>Ta super strona zawiera super wydarzenia z branży IT!</p>} />
      </div>
    </Router>
  )
}

export default App;
