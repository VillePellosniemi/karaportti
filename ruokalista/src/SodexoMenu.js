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

  componentDidMount() {
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

    let dayNumber = (new Date().getDay()-1);
    let monthNames = ["Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai - ei ruokaa tänään!", "Sunnuntai - ei ruokaa tänään!"];
    let monthName = monthNames[dayNumber];
    console.log(dayNumber);

    return (
        <div>
          <img id="sodexologo"
               src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Sodexo.svg/1200px-Sodexo.svg.png"
               alt={'logo'}/>
          <div>
            {items.map(item =>
                <div>
                  <p className="title">{item.title_fi}</p>
                </div>,
            )}
          </div>
        </div>
    );
  }
}

export default SodexoMenu;
