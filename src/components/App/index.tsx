
import * as React from 'react';

import Header from '../Header';
import Tasks from '../Tasks';

import './style.scss';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <Tasks />
      </div>
    );
  }
}

export default App;
