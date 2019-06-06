import React, { Component } from 'react';
import Movie from './Movie.js'
import App from './../App.js'


class MovieList extends Component{
  render(){
    const set = (this.props.SetFavorite)
    return (
      
      <ul>
      {this.props.ids.map((id)=> {
          return <Movie SetFavorite = {set}
                        movie = {this.props.movies[id]} 
                        id = {id}
                        key = {id}/>
                        
      })}
      </ul>
    );
  }
  
}

export default MovieList;