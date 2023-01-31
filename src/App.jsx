import React, { Component } from 'react';
import Searchbar from './shared/components/Searchbar/Searchbar';
import ImageGallery from './modules/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    search: '',
    images: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
  };

  handleSearchSubmit = () => {};

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {/* <ImageGallery /> */}
      </>
    );
  }
}

export default App;
