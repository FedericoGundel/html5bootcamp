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
          
        
         
                
        
        <div>
          <h1>Favorites Movie list</h1>
          <FavMovieListContainer/>
        </div>
     
      </div>
    );
  }
  
}




export default App

