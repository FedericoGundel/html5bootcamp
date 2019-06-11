const initialState ={ data: [],
                      moviesId:[]}

 
/*export const moviesReducer = (state = {
    title:"",genre:""} , action) =>{
        switch(action.type){
        case "SET_TITLE":
            state = {
            ...state,
            title : action.payload
            }
        break;
        case "SET_GENRE":
            state = {
            ...state,
            genre : action.payload
            }

    }
        
    
    return state;
    
  }*/
  export const movies = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_MOVIE":
          
        state = {
            ...state,
           data : [...state.data,{
                id: action.payload.id,
                title: action.payload.title,
                genre: action.payload.genre
            }],
           moviesId:[...state.moviesId,action.payload.id]}
        
       return state;
      default:
        return state;
    }
  }
 
