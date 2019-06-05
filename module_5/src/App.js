import React, { Component } from 'react';
import MovieList from './components/MovieList.js'
import './App.css';

/*let movies = [{
  id:1,
  title:"Avengers",
  genre:"Accion"
}, {
  id:2,
  title:"Avengers",
  genre:"Accion"
}, {
  id:3,
  title:"Avengers",
  genre:"Accion"
}]*/



class App extends Component{
  constructor(){
    super()
    this.state = {
      movies : [{
        id:1,
        title:"Avengers",
        genre:"Accion"
      }, {
        id:2,
        title:"Spiderman",
        genre:"Accion"
      }, {
        id:3,
        title:"Hulk",
        genre:"Accion"
      }]
    }
  }
  render(){

    return (

      <div className="App">
        <h1>Movies List</h1>
        <MovieList movies = {this.state.movies}/>
      </div>
    );
  }
  
}

export default App;