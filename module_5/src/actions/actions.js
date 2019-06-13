let cantItems = 0;
export const editMovie = (id,title,genre) =>{
    return {
        type:"EDIT_MOVIE",
        payload: {
            id:id,
            title:title,
            genre:genre
        }
    }
}
export const setGenre = (genre) =>{
    return {
        type:"SET_GENRE",
        payload:genre
    }
}
export const addMovie = (title,genre) =>{
    return {
        type:"ADD_MOVIE",
        payload: {
            id:cantItems++,
            title:title,
            genre:genre
        }
    }
}
export const setFavorite = (id) =>{
    return {
        type:"SET_FAVORITE",
        payload:id
    }
}
export const deleteMovie = (id) =>{
    return {
        type:"DELETE_MOVIE",
        payload:id
    }
}

