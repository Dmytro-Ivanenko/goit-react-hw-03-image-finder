import { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import styles from './searchbar.module.scss';

class Searchbar extends Component {
  state = {
    search: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    this.reset();
  };

  handleChangeInput = e => {
    this.setState({ search: e.target.value });
  };

  reset() {
    this.setState({
      search: '',
    });
  }

  render() {
    const { search } = this.state;

    return (
      <header className={styles.Searchbar}>
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
            value={search}
            onChange={this.handleChangeInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
