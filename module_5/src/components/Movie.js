import React, { Component } from 'react';



class Movie extends Component{   
  
  render(){
        
        
            return (
                <ul>
                    <li>
                        <div>
                            <p>Pelicula nro {this.props.id}</p>
                            <p>title: {this.props.movie.title}</p>
                            <p>genre: {this.props.movie.genre}</p>
                            <button type='button' onClick={()=>{this.props.SetFavorite(this.props.id)}} >Add to Favorites </button>
                            <button type='button' onClick={()=>{this.props.delete(this.props.id)}} >Delete </button>
                        </div>
                    </li>
                </ul>
            )
        
    
    
  
  
}
}
export default Movie