import React, { Component } from 'react';
import Movie from './Movie.js'



class MovieList extends Component{
  render(){
    const set = (this.props.SetFavorite)
    const del = (this.props.delete)
    return (
      
      <ul>
      {this.props.ids.map((id)=> {
          return <Movie delete = {del}
                        SetFavorite = {set}
                        movie = {this.props.movies[id]} 
                        id = {id}
                        key = {id}/>
                        
      })}
      </ul>
    );
  }
  
}

export default MovieList;