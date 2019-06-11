import React, { Component } from 'react';
import Movie from './Movie.js'


class FavMovieList extends Component{
  render(){
    const movies = this.props.ids.map((id)=>{return this.props.movies[id]})
    const favMovies = movies.filter((mov)=>{return mov.favorite===true})
   
    return (
        
        <ul>
          {favMovies.map((movie)=> {
                return <Movie fav = {this.props.fav}
                              movie = {movie} 
                              key = {movie.id}/>
                              
            })}
        </ul>
      );
  }
  
}

export default FavMovieList;