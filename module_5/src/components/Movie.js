import React, { Component } from 'react';



class Movie extends Component{
    constructor(){
        super();
       
    }
  
  render(){
        const boton = "";
        if(this.props.fav != true){
            return (
                <ul>
                    <li>
                        <div>
                            <p>title: {this.props.movie.title}</p>
                            <p>genre: {this.props.movie.genre}</p>
                            <button type='button' onClick={()=>{this.props.SetFavorite(this.props.id)}} >Add to Favorites </button>
                        </div>
                    </li>
                </ul>
            );
        }else{
            return (
                <ul>
                    <li>
                        <div>
                            <p>title: {this.props.movie.title}</p>
                            <p>genre: {this.props.movie.genre}</p>
                            
                        </div>
                    </li>
                </ul>
            );
        }
        
    }
    
  
  
}

export default Movie;