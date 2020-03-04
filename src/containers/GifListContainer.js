import React from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  handleQuerySearch = (query) => {
    fetch("https://api.giphy.com/v1/gifs/search?q="+query+"&api_key=OG6hHdWo8T3qRgDma5emwTvhcsqBo6Eg&rating=g&limit=3")
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          gifs: json.data
        })
      })
  }

  render() {
    return(
    <div className="container">
      < GifSearch handleQuerySearch={this.handleQuerySearch}/> 
      < GifList gifs={this.state.gifs} />
    </div>
    )
  }

}

export default GifListContainer