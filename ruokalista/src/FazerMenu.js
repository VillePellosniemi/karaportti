import React, {Component} from 'react';
import './App.css';

class FazerMenu extends Component {

  state = {
    loading: true,
    item: null,
  };

  async componentDidMount () {
    /* vaihda menufordays indxiä saadaksesi eri päivän */
    const url = 'https://cors-anywhere.herokuapp.com/https://www.fazerfoodco.fi/modules/json/json/Index?costNumber=3208&language=fi';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({item: data.MenusForDays[0], loading: false})
    console.log(data);
  }

  render() {


    return (
        <div className="App">
          {this.state.loading || !this.state.item ? (
              <div>loading...</div>
          ): (
              <div>
                <div>
                  <p>{this.state.item.SetMenus[0].Components}</p>
                  <p>{this.state.item.SetMenus[1].Components}</p>
                  <p>{this.state.item.SetMenus[2].Components}</p>
                  <p>{this.state.item.SetMenus[3].Components}</p>
                  <p>{this.state.item.SetMenus[4].Components}</p>
                </div>
              </div>
          )}
        </div>
    );
  }
}

export default FazerMenu;
