import React, { Component } from 'react';
import MovieListContainer from './containers/MovieListContainer.js';
import FavMovieListContainer from './containers/FavMovieListContainer.js';

//import './App.css';





  
  

class App extends Component{
  constructor(){
    super();
    
    }
    


  
  
  
  render(){

    return (
      
      <div className="App">
        <h1>Movie list</h1>
          <MovieListContainer
           
        
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

