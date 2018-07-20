// State argument is not app state, only that state this reducer is responsible for.
export default function(state = null, action) {
    switch(action.type) {
        case 'COMPANY_SELECTED':
            return action.payload
    }

    return state;
}