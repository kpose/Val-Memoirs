import React from 'react';
import axios from 'axios';

import Header from './components/Header';
import SearchBar from './components/SearchBar/SearchBar';
import ImageList from './components/ImageList/ImageList';

class App extends React.Component  {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID cd327c5d5ab07b106c15b75d6d455a3daac70eaf855852ce61c40557f907f857'
            }
        })

        this.setState({ images: response.data.results })
    }

    render() {
        return (
          <div>
          <div>
            <Header />
          </div>
            <div>
                <SearchBar userSubmit={this.onSearchSubmit}/>
                <span>Found: {this.state.images.length} images</span>
                <ImageList foundImages={this.state.images} />
            </div>
            </div>
        )
    }

}

export default App;