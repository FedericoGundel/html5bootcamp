import React, { Component } from 'react';
import { connect } from 'react-redux'
import Movie from './../components/Movie.js'
 
class FavMovieListContainer extends Component{
  constructor(props){
    super(props)
    
  }
  
  render(){
    const getFavMovies =this.props.movies.filter(m => m.favorite===true);

    return (
      <ul>
      {getFavMovies.map((m)=> {
          return    <div>
                      <Movie
                          movie = {m} 
                          id = {m.id}
                          key = {m.id}/>
                    </div>
      })}
      </ul>
      
    )
}
} 
  const mapStateToProps = (state) => { 
    return {movies : state.movies.data ,
            ids : state.movies.moviesId}
          }

  export default connect(mapStateToProps,null)(FavMovieListContainer)