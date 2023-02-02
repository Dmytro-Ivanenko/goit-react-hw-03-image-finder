import React, { Component } from 'react';
import { ColorRing } from 'react-loader-spinner';

import Searchbar from './shared/components/Searchbar/Searchbar';
import ImageGallery from './modules/ImageGallery/ImageGallery';
import Button from './shared/components/Button/Button';
import Modal from './shared/components/Modal/Modal';

import { searchImages } from './shared/services/pixabay-api';

class App extends Component {
  state = {
    search: '',
    images: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    modalImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;

      const data = await searchImages(search, page);
      console.dir(data);
      this.setState(({ images }) => ({
        images: [...images, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleSearchSubmit = search => {
    this.setState({ search, images: [], page: 1 });
  };

  loadMore = e => {
    console.log(e);
    this.setState(({ page }) => {
      return { page: page + 1 };
    });
  };

  OnClickModal = largeImage => {
    this.setState({
      modalImage: largeImage,
      showModal: true,
    });
  };

  OncloseModal = () => {
    this.setState({
      showModal: false,
      modalImage: null,
    });
  };

  render() {
    const { images, loading, error, showModal, modalImage } = this.state;
    const { loadMore, handleSearchSubmit, OnClickModal, OncloseModal } = this;
    return (
      <>
        <Searchbar onSubmit={handleSearchSubmit} />
        <ImageGallery images={images} showModal={OnClickModal} />
        {error && <p>{error.massage}</p>}
        {loading && (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        )}
        {Boolean(images.length) && (
          <Button type="button" onClickBtn={loadMore}>
            Load more
          </Button>
        )}
        {showModal && (
          <Modal close={OncloseModal} largeImage={modalImage}></Modal>
        )}
      </>
    );
  }
}

export default App;
