import React, { Component } from 'react';
import MovieListContainer from './containers/MovieListContainer.js';
import FavMovieListContainer from './containers/FavMovieListContainer.js';

//import './App.css';





  
  

class App extends Component{
  constructor(){
    super();
    this.state = {
      movies : {},
      moviesById : []
      
    }
    
    this.SetFavorite = (id) => {
      const newMovies = this.state.movies
      newMovies[id].favorite = true;
      this.setState({
        movies:newMovies
        
      })    
    }
    this.editMovie = (e) => {
      e.preventDefault();
      const newMovies = this.state.movies
      
      newMovies[this.movieId.value] = {
        favorite:false,
        title:this.editTitle.value,
        genre:this.editGenre.value
      }
      this.setState({
        movies:newMovies
      })
    }
    this.deleteMovie = (id) =>{
      const newMovies = this.state.movies;
      delete newMovies[id]
      this.setState({
        movies:newMovies
      })
    }

  
  }
  

  
  
  
  
  
  render(){

    return (
      
      <div className="App">
        <h1>Movie list</h1>
          <MovieListContainer
            delete = {this.deleteMovie}
        
          />
          
        
          <form onSubmit={(e)=>{this.editMovie(e)}}>
            <div>
              <label>Edit a Movie:</label>
              <select ref={(input)=>{this.movieId=input}} placeholder="Choose a movie">
                {this.state.moviesById.map((id)=> {
                  return <option value = {id}>{id}</option>
                })}
              </select>
              <input ref={(input)=>{this.editTitle=input}} type="text" placeholder="title"></input>
              <input ref={(input)=>{this.editGenre=input}} type="text" placeholder="genre"></input>
              <button type="submit">Edit</button>
            </div>    
          </form>
                
        
        <div>
          <h1>Favorites Movie list</h1>
          <FavMovieListContainer/>
        </div>
     
      </div>
    );
  }
  
}




export default App

