const defaultState = {
    inputValue : '',
    list:[],
}

export default (state = defaultState,action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if(action.type === 'change_input_value') {
        newState.inputValue = action.value;
    }
    if(action.type === 'add_item') {
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
    }
    if(action.type === 'delete_item') {
        newState.list.splice(action.index,1);
    }
    return newState;
}