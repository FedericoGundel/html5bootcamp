
const initialState ={ data: [],
                      moviesId:[]}

 

  export const movies = (state = initialState, action) => {
    
    
  
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
          const setFav = function(id) {return state.data.map((o)=>{
            if(o===state.data[id]){
                return {...o,favorite:!state.data[id].favorite}
            }
            else return o
        })}
        return{...state,
              data:setFav(action.payload)}
          /*return state.data.map(movie =>
            movie.id === action.payload ? { ...movie, favorite: !movie.favorite } : movie
          )*/
      break;
      case "EDIT_MOVIE":
          const editData = function(id) {return state.data.map((o)=>{
            if(o===state.data[id]){
                return {...o,title:action.payload.title,genre:action.payload.genre}
            }
            else return o
        })}
        return{...state,
          data:editData(action.payload.id)}
      default:
        return state;
    }
  }

  
