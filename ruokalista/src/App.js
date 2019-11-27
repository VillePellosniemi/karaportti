import React, {Component} from 'react';
import './css/App.css';
import FazerMenu from './components/FazerMenu';
import Background from './components/Background';
import FazerMenuEN from './components/FazerMenuEN';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Background/>
          <FazerMenuEN/>
          <FazerMenu/>
        </div>
    );
  }
}

export default App;
