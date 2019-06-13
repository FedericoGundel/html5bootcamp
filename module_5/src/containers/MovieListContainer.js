import React, { Component } from 'react';
import MovieList from './../components/MovieList.js';
import { connect } from 'react-redux'
import {addMovie,setFavorite,editMovie,deleteMovie} from "./../actions/actions.js"
import store from "./../reducers/store.js"
 
class MovieListContainer extends Component{
  constructor(props){
    super(props)

  }
  HandleAddForm = (e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    const newTitle = data.get("title");
    const newGenre = data.get("genre");
    this.props.addMovie(newTitle,newGenre)
    store.subscribe =(() =>{})
    
  }
  editMovie = (e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    const newTitle = data.get("title");
    const newGenre = data.get("genre");
    const id = data.get("id");
    this.props.editMovie(id,newTitle,newGenre)
  }
  
  
  render(){
    console.log(store.getState())
    return (
     <div>
       <MovieList
        delete = {this.props.deleteMovie}
        SetFavorite = {this.props.setFavorite}
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

      <form onSubmit={(e)=>{this.editMovie(e)}}>
            <div>
              <label>Edit a Movie:</label>
              <select name = "id" placeholder="Choose a movie">
                {this.props.ids.map((id)=> {
                  return <option value = {id}>{id}</option>
                })}
              </select>
              <input name = "title"type="text" placeholder="title"></input>
              <input name = "genre" type="text" placeholder="genre"></input>
              <button type="submit">Edit</button>
            </div>    
      </form>  
     </div>
     
      
    )
    }
  }
  const mapDispatchToProps = (dispatch) => (
    {
      addMovie: (title,genre)=>
        dispatch(addMovie(title,genre)),
      setFavorite: (id)=>
        dispatch(setFavorite(id)),
      editMovie: (id,title,genre) =>
        dispatch(editMovie(id,title,genre)),
        deleteMovie: (id)=>
        dispatch(deleteMovie(id))
    }
  )
  const mapStateToProps = (state) => { 
    return {movies : state.movies.data ,
            ids : state.movies.moviesId}
          }

  export default connect(mapStateToProps,mapDispatchToProps)(MovieListContainer)