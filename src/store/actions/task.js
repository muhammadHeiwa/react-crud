export const add = todo => {
    return{
      type: "ADD_TASK_REQUEST",
      payload: todo
    }
}

export const del = (id) => {
    return {
        type: "DEL_TASK_REQUEST",
        payload: id
    }
};

export const update = (todo) => {
    return {
        type: "UPDATE_TASK_REQUEST",
        payload: todo
    }
}
