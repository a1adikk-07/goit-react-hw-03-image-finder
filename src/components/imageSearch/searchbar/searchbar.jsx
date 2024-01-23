import { Component } from 'react';

class Searchbar extends Component {
  state = {
    search: '',
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ search: this.state.search });
    this.setState({ search: '' });
  };
  render() {
    const { handleChange, handleSubmit } = this;
    const { search } = this.state;
    return (
      <header>
        <form onSubmit={handleSubmit}>
          <button type="submit">Search</button>
          <input
            value={search}
            onChange={handleChange}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
