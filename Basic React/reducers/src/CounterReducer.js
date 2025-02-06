const initialState = {count:0}
function counterReducer(state,action){
    switch(action.type){
        case 'incre':
            return{count: state.count + 1}
        case 'decre':
            return{count: state.count -1}
        case 'IncreByAmount':
            return {count:state.count + action.payload}
        case 'DecreAnyAmount':
            return {count: state.count - action.payload}
        default:
            return state

    }
}
export {initialState,counterReducer}