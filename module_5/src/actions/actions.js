let cantItems = 0;
export const setTitle = (title) =>{
    return {
        type:"SET_TITLE",
        payload:title
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

