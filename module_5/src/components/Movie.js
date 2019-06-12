import React, { Component } from 'react';



class Movie extends Component{ 
    constructor(props){
        super(props)
        
        
       
      }  
  
  render(){
        
        
            return (
                <ul>
                    <li>
                        <div>
                            <p>Pelicula nro {this.props.id}</p>
                            <p>title: {this.props.movie.title}</p>
                            <p>genre: {this.props.movie.genre}</p>
                        </div>
                    </li>
                </ul>
            )
        
    
    
  
  
}
}
export default Movie