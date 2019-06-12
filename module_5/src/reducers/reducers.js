
const initialState ={ data: [],
                      moviesId:[]}

 

  export const movies = (state = initialState, action) => {
    const data2 = function(id) {return state.data.map((o)=>{
      if(o===state.data[id]){
          return {...o,favorite:!state.data[id].favorite}
      }
      else return o
  })}
  
    switch (action.type) {
      case "ADD_MOVIE":    
        state = {
            ...state,
           data : [...state.data,{
                id: action.payload.id,
                title: action.payload.title,
                genre: action.payload.genre,
                favorite:false
            }],
           moviesId:[...state.moviesId,action.payload.id]}
       return state;
       break;
      case "SET_FAVORITE":
        return{...state,
              data:data2(action.payload)}
          /*return state.data.map(movie =>
            movie.id === action.payload ? { ...movie, favorite: !movie.favorite } : movie
          )*/
      break;
      default:
        return state;
    }
  }

  
