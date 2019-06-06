import React, { Component } from 'react';
import MovieList from './components/MovieList.js'
import './App.css';


class App extends Component{
  constructor(){
    super()
    this.state = {
      movies : []
    }
    //this.handleClick = this.handleClick.bind(this);
    
    
  }
  
  addMovie(e){
    e.preventDefault();
    const newMovie = {
      id:this.state.movies.length,
      title:this.newTitle.value,
      genre:this.newGenre.value
    }
    this.setState({
      movies : [...this.state.movies, newMovie]
    })
  }
  render(){
    console.log(this.state.movies.length)
    return (
      
      <div className="App">
        <h1>Movies List</h1>
        <MovieList movies = {this.state.movies}/>
        <form onSubmit={(e)=>{this.addMovie(e)}}>
          <div>
            <label>Add a new Movie:</label>
            <input ref={(input)=>{this.newTitle=input}} type="text" id ="title" placeholder="title"></input>
            <input ref={(input)=>{this.newGenre=input}} type="text" id ="genre" placeholder="genre"></input>
            <button type="submit">Add</button>
          </div>          
        </form>
      </div>
    );
  }
  
}

export default App;