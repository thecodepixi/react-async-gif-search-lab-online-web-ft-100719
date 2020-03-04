import React from 'react';

class GifList extends React.Component {
  render(){
    console.log(this.props.gifs)
    return (
      <div className="container">
      { this.props.gifs.map( gif => {
        return <li className="list-item"><img src={gif.images.original.url} /></li>
      }) }
      </div>
    )
  }
}

export default GifList