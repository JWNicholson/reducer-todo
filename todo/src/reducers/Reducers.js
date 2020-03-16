
export const intialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      },
  {
    item: 'Finish this project',
    completed: false,
    id: 3892987590,
    
  },
  {
    item: 'Order a condor sandwich',
    completed: false,
    id: 3892987591,
    
  }
]

  export const todoReducer = (state, action) => {
        switch(action.type) {
        case "TOGGLE_TODO":
        return state.map(item => {
          if (item.id === action.payload) {
            return {...item, completed: !item.completed};
          }
          else {
            return item;
          }
        })
        case "ADD_TODO" :
        return [...state, action.payload];
        case "DELETE_TODO":
        return state.filter(item => {
          //keep what is false,delete what is true
          return !item.completed
        }) 
         
        default:
    return state
 }
}