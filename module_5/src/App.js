import React, { Component } from 'react';
import MovieList from './components/MovieList.js'
import FavMovieList from './components/FavMovieList.js'
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state = {
      movies : {},
      moviesById : []
      
    }
    this.addMovie = (e) =>{
      e.preventDefault();
      
      const newMovies = this.state.movies
      const newMoviesId =this.state.moviesById
      const id = this.state.moviesById.length +1;
      newMoviesId.push(id);
      newMovies[id] = {
        favorite:false,
        title:this.newTitle.value,
        genre:this.newGenre.value
      };
      
      this.setState({
        moviesById :newMoviesId,
        movies: newMovies
      })
      
      
    }
    this.SetFavorite = (id) => {
      const newMovies = this.state.movies
      newMovies[id].favorite = true;
      this.setState({
        movies:newMovies
        
      })
      
    }
    
  }
  get moviesList(){
    return this.state.movies
  }
  
  
  render(){
    
    //this.HandleClik();
    
    /*const favMovies = this.state.movies.filter(favMovie=>{
      return favMovie.favorite==true;
    })*/
    return (
      
      <div className="App">
        <h1>Movie list</h1>
          <MovieList
            SetFavorite = {this.SetFavorite}
            movies = {this.state.movies}
            ids = {this.state.moviesById}
          />

        <form onSubmit={(e)=>{this.addMovie(e)}}>
          
          <div>
            <label>Add a new Movie:</label>
            <input ref={(input)=>{this.newTitle=input}} type="text" id ="title" placeholder="title"></input>
            <input ref={(input)=>{this.newGenre=input}} type="text" id ="genre" placeholder="genre"></input>
            <button type="submit">Add</button>
          </div>          
        </form>
        <div>
          <h1>Favorites Movie list</h1>
          <FavMovieList
              fav = {true}
              movies = {this.state.movies}
              ids = {this.state.moviesById}
          />
        </div>
     
      </div>
    );
  }
  
}

export default App;