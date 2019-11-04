import React, {Component} from 'react';
import './Menu.css';

class SodexoMenu extends Component {

  state = {
    loading: true,
    item: null,
  };

  async componentDidMount () {
    let vuosi = new Date().getFullYear();
    let kk = new Date().getMonth()+1;
    let d = new Date().getDate();
    let paivays = vuosi + '/' + kk + '/' + d;
    let myyrmaki = 16365;

    const url = 'https://cors-anywhere.herokuapp.com/https://www.sodexo.fi/ruokalistat/output/daily_json/' + myyrmaki + '/' + paivays + '/fi';
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
                  <p className="title">{this.state.item[0].title_fi} <br/> {this.state.item[0].title_en}</p>
                  <p className="price">{this.state.item[0].price}</p>
                </div>
                <div>
                  <p className="title">{this.state.item[1].title_fi} <br/> {this.state.item[1].title_en}</p>
                  <p className="price">{this.state.item[1].price}</p>
                </div>
                <div>
                  <p className="title">{this.state.item[2].title_fi} <br/> {this.state.item[2].title_en}</p>
                  <p className="price">{this.state.item[2].price}</p>
                </div>
                <div>
                  <p className="title">{this.state.item[3].title_fi} <br/> {this.state.item[3].title_en}</p>
                  <p className="price">{this.state.item[3].price}</p>
                </div>
                <div>
                  <p className="title">{this.state.item[4].title_fi} <br/> {this.state.item[4].title_en}</p>
                  <p className="price">{this.state.item[4].price}</p>
                </div>
                <div>
                  <p className="title">{this.state.item[5].title_fi} <br/> {this.state.item[5].title_en}</p>
                  <p className="price">{this.state.item[5].price}</p>
                </div>
                <div>
                  <p className="title">{this.state.item[6].title_fi} <br/> {this.state.item[6].title_en}</p>
                  <p className="price">{this.state.item[6].price}</p>
                </div>
              </div>
          )}
        </div>
    );
  }
}

export default SodexoMenu;
