import React, {Component} from 'react';
import './FazerMenu.css';

class FazerMenu extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentWillMount() {
    const url = 'http://cors-anywhere.herokuapp.com/https://www.fazerfoodco.fi/modules/json/json/Index?costNumber=3208&language=fi';
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

    let {isLoaded, items} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    console.log(items);

    return (
        <div>
          <img id="fazerlogo"
               src="http://www.seinajokiareena.fi/images/kuvapankki/maxi/Fazer_food_co_logo_cmyk_309.png"
               alt={'logo'}/>
          {items.slice(0, 1).map(item =>
              <div>
                {item.SetMenus.map(item =>
                    <div className="food_group">
                      {item.Components.map(item =>
                          <p className="food_element">{item}</p>,
                      )}
                    </div>,
                )}
              </div>,
          )}
        </div>
    );
  }
}

export default FazerMenu;
