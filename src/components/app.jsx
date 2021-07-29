import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'TjFtnmB0UfffIHLOuH7uxnZTmsK1U4sE';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "l46CqLVMWzaJUFPLW"
    };
    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

  search(query) {
    const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=15`;
    fetch(giphEndpoint).then(response => response.json()).then((data) => {
      const gifs = data.data.map(giph => giph.id);
      this.setState({
        gifs: gifs
      });
    });
  }

  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
