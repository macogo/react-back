import * as pro from './action-type';

export const proData = (state, action) => {
    switch (action.type) {
        case pro.SETNAVNAME:
            return { ...state, ...action };
        default:
            return state;
    }
}