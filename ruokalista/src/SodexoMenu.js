import React, {Component} from 'react';
import './SodexoMenu.css';

class SodexoMenu extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentWillMount() {
    let vuosi = new Date().getFullYear();
    let kk = new Date().getMonth() + 1;
    let d = new Date().getDate();
    let paivays = vuosi + '/' + kk + '/' + d;
    let myyrmaki = 16365;

    const url = 'http://cors-anywhere.herokuapp.com/https://www.sodexo.fi/ruokalistat/output/daily_json/' +
        myyrmaki + '/' + paivays + '/fi';
    fetch(url).then(response => response.json()).then(({courses: items}) => {
      this.setState({
        isLoaded: true,
        items,
      });
    });
  }

  render() {

    let {isLoaded, items} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
        <div>
          <img id="sodexologo"
               src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Sodexo.svg/1200px-Sodexo.svg.png"
               alt={'logo'}/>
          <div>
            {items.map(item =>
                <div>
                  <p className="title">{item.title_fi}<br/>{item.title_en}</p>
                  <p className="price">{item.price}</p>
                </div>,
            )}
          </div>
        </div>
    );
  }
}

export default SodexoMenu;
