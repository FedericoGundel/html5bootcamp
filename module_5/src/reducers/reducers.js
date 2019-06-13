
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
       
      case "SET_FAVORITE":
          const setFav = function(id) {return state.data.map((o)=>{
            if(o.id===id){
                return {...o,favorite:!state.data[id].favorite}
            }
            else return o
        })}
        console.log(setFav(action.payload))
        return{...state,
              data:setFav(action.payload)}
          /*return state.data.map(movie =>
            movie.id === action.payload ? { ...movie, favorite: !movie.favorite } : movie
          )*/
     
      case "EDIT_MOVIE":
          const editData = function(id) {return state.data.map((o)=>{
            ifs(o.id===id){
                return {...o,title:action.payload.title,genre:action.payload.genre}
            }
            else return o
        })}
        return{...state,
          data:editData(action.payload.id)};
        
      case "DELETE_MOVIE":
          let deleteData = function(id) {return state.data.filter((m)=>{
            return m != state.data[id];
            
        })}
          let deleteId = function(id) {return state.moviesId.filter((i)=>{
            return i != state.moviesId[id];
            
        })}
        return state = {...state,
            data:deleteData(action.payload),
            moviesId:deleteId(action.payload)}
         
        
      default:
        return state;
    }
  }

  
