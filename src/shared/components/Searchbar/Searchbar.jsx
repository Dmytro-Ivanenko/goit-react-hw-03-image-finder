import { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import styles from './searchbar.module.scss';

class Searchbar extends Component {
  state = {
    search: '',
  };

  // Добавить inChange для инпута

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      search: '',
    });
  }

  render() {
    return (
      <header className="searchbar">
        <form className="form">
          <Button type="submit" onClickBtn={this.handleSubmit}>
            Search
          </Button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.search}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
