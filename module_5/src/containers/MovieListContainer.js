import React, { Component } from 'react';
import MovieList from './../components/MovieList.js';
import { connect } from 'react-redux'
import {addMovie} from "./../actions/actions.js"
import store from "./../reducers/store.js"
class MovieListContainer extends Component{
  constructor(){
    super()
   
  }
  HandleAddForm = (e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    const newTitle = data.get("title");
    const newGenre = data.get("genre");
    this.props.addMovie(newTitle,newGenre)
    console.log(store.getState())

  }
 
  
  render(){
    console.log(this.props.movies)
    
    return (
     <div>
       <MovieList
      delete = {this.props.deleteMovie}
      SetFavorite = {this.props.SetFavorite}
      movies = {this.props.movies}
      ids = {this.props.ids}
      />
      <form onSubmit={(e)=>{this.HandleAddForm(e)}}>
          <div>
            <label>Add a new Movie:</label>
            <input name = "title" type="text" id ="title" placeholder="title"></input>
            <input name = "genre" type="text" id ="genre" placeholder="genre"></input>
            <button type="submit">Add</button>
          </div>
          </form>
        
     </div>
      
    )
    }
  }
  const mapDispatchToProps = (dispatch) => (
    {
      addMovie: (title,genre)=>
        dispatch(addMovie(title,genre))
    }
  )
  const mapStateToProps = state => ({ movies : state.movies.data ,
                                      ids : state.movies.moviesId})

  export default connect(mapStateToProps,mapDispatchToProps)(MovieListContainer)