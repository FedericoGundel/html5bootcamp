import React, { Component } from 'react';



class Movie extends Component{

  render(){

    return (
        <ul>
            <li>
                <div>
                    <p>title: {this.props.movie.title}</p>
                    <p>genre: {this.props.movie.genre}</p>
                </div>
            </li>
        </ul>
    );
  }
  
}

export default Movie;