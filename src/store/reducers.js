const INITIAL_AUTH = {
    token: null,
    user: {}
};

export const authReducer = (state = INITIAL_AUTH, action) => {
    switch (action.type) {
        case 'UPDATE_TOKEN':
            return { ...state, token: action.token };
        case 'UPDATE_USER':
            return { ...state, user: action.token };
        default:
            return state;
    }
};