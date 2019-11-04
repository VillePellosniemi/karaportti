import React, {Component} from 'react';
import './App.css';

class Menu extends Component {

  state = {
    loading: true,
    item: null,
  };

  async componentDidMount () {
    const url = "https://cors-anywhere.herokuapp.com/https://www.sodexo.fi/ruokalistat/output/daily_json/16365/2019/11/04/fi";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({item: data.courses, loading: false})
  }

  render() {


    return (
        <div className="App">
          {this.state.loading || !this.state.item ? (
              <div>loading...</div>
          ): (
              <div>
                <div>
                  <p>{this.state.item[0].title_fi} {this.state.item[0].price}</p>
                </div>
                <div>
                  <p>{this.state.item[1].title_fi} {this.state.item[1].price}</p>
                </div>
                <div>
                  <p>{this.state.item[2].title_fi} {this.state.item[2].price}</p>
                </div>
                <div>
                  <p>{this.state.item[3].title_fi} {this.state.item[3].price}</p>
                </div>
                <div>
                  <p>{this.state.item[4].title_fi} {this.state.item[4].price}</p>
                </div>
                <div>
                  <p>{this.state.item[5].title_fi} {this.state.item[5].price}</p>
                </div>
                <div>
                  <p>{this.state.item[6].title_fi} {this.state.item[6].price}</p>
                </div>
              </div>
          )}
        </div>
    );
  }
}

export default Menu;
