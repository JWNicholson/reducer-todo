export const initialState = {
    
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
}

export const todoReducer = (state, action) => {
    switch(action.type) {
   
    case "ADD_TODO" :
    return [...state, action.payload];
    case "DELETE_TODO":
    return state.filter(item => {
      //this will filter and keep whatever is false, and whatever is true it will delete
      return !item.completed
    }) 
     
    
    default:
return state
}

}