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
      {this.props.ids.map((id)=> {
          return    <div>
                      <Movie
                          movie = {this.props.movies[id]} 
                          id = {id}
                          key = {id}/>
                      <button type='button' onClick={()=>{set(id)}} >Add to Favorites </button>
                      <button type='button' onClick={()=>{del(id)}} >Delete </button>
                    </div>
                    
                        
      })}
      </ul>
    );
  }
  
}

export default MovieList;