import React from 'react';

class GifSearch extends React.Component{
  state = {
    query: ""
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <form>
      <input
        type="text"
        name="query"
        onChange={this.handleChange}
      />
      <button 
        type="submit"
        className="btn btn-info"
        onClick={ event => {
          event.preventDefault()
          this.props.handleQuerySearch(this.state.query)
        }}
      >Search</button>
    </form>
    )
  }
}

export default GifSearch