export const ADD_UPGRADE = 'ADD UPGRADE';
export const REMOVE_UPGRADE = 'REMOVE_UPGRADE';

export const addUpgrade = feature =>{
    return{
        type: ADD_UPGRADE,
        payload: feature
    }
}

export const removeUpgrade = feature =>{
    return{
        type: REMOVE_UPGRADE,
        payload: feature
    }
}