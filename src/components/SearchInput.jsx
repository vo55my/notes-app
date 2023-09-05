import React from 'react'

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    }

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(event) {
    this.setState({ keyword: event.target.value })
  }

  render() {
    return (
      <input className='navigation-bar__search-input' type="text" placeholder='Search...' onKeyUp={(() => this.props.onSearchHandler(this.state.keyword))} onChange={this.onKeywordChangeHandler} />
    );
  }
}

export default SearchInput;