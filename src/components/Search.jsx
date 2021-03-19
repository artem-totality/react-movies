import React from 'react';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      category: '',
    };
  }

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.callSearchRequest();
    }
  };

  handleCategory = (e) => {
    this.setState(
      () => ({ [e.target.name]: e.target.value }),
      () => {
        this.callSearchRequest();
      }
    );
  };

  callSearchRequest = () => {
    //prettier-ignore
    this.props.handleSearch(
      `&s=${this.state.search}${this.state.category ? `&type=${this.state.category}` : ``}`
    );
  };

  render() {
    const { category } = this.state;

    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              className="validate"
              placeholder="search"
              type="search"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
          </div>
          <a
            className="waves-effect waves-light btn"
            onClick={() => {
              this.callSearchRequest();
            }}
          >
            button <i className="material-icons right">send</i>
          </a>
          <div className="search-category d-flex justify-sb">
            <label>
              <input
                className="with-gap"
                name="category"
                type="radio"
                value=""
                onChange={this.handleCategory}
                checked={category === ''}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="category"
                type="radio"
                value="movie"
                onChange={this.handleCategory}
                checked={category === 'movie'}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="category"
                type="radio"
                value="series"
                onChange={this.handleCategory}
                checked={category === 'series'}
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
