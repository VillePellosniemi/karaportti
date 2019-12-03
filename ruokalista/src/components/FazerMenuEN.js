import React, {Component} from 'react';
import '../css/FazerMenuEN.css';

class FazerMenuEN extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    };
  }



  componentDidMount() {
    const url = 'http://cors-anywhere.herokuapp.com/https://www.fazerfoodco.fi/modules/json/json/Index?costNumber=3208&language=en';
    fetch(url)
    .then(response => response.json())
    .then(({MenusForDays: items}) => {
      this.setState({
        isLoaded: true,
        items,
      });
    });
  }

  render() {

    let dayNumber = (new Date().getDay()-1);
    let monthNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday - no food today!", "Sunday - no food today!"];
    let monthName = monthNames[dayNumber];

    let vuosi = new Date().getFullYear();
    let kk = new Date().getMonth() + 1;
    let d = new Date().getDate();
    let paivays = d + '.' + kk + '.' + vuosi;

    let {isLoaded, items} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    console.log(items);

    return (
        <div className="outer">
          <div className="left">
            <img id="fazerlogo"
                 src="http://www.seinajokiareena.fi/images/kuvapankki/maxi/Fazer_food_co_logo_cmyk_309.png"
                 alt={'logo'}/>
            <p id="day">{monthName} {paivays}</p>
            {items.slice(0, 1).map(item =>
                <div>
                  {item.SetMenus.splice(0,5).map(item =>
                      <div className="food_group">
                        {item.Components.map(item =>
                            <p className="food_element">{item}</p>,
                        )}
                      </div>
                  )}
                </div>
            )}
          </div>
        </div>
    );
  }
}

export default FazerMenuEN;
