import React, { Component } from 'react';
import Movie from './Movie.js'



class MovieList extends Component{
  constructor(props){
    super(props)
    
    
   
  }
  render(){
    const set = (this.props.SetFavorite)
    const del = (this.props.delete)
    return (
      
      <ul>
      {this.props.movies.map((m)=> {
          return    <div>
                      <Movie
                          movie = {m}
                          id = {m.id}
                          key = {m.id}/>
                      <button type='button' onClick={()=>{set(m.id)}} >Add to Favorites </button>
                      <button type='button' onClick={()=>{del(m.id)}} >Delete </button>
                    </div>
                    
                        
      })}
      </ul>
    );
  }
  
}

export default MovieList;