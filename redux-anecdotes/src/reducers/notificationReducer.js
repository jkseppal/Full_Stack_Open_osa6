const notificationReducer = (state = 'NULL', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

/*export const notificationChange = (notification) => {
  return {
    type: 'SET_NOTIFICATION',
    notification,
  }
}*/

export const notificationChange = (notification, timer) => {
  return async dispatch => {
    await dispatch({
      type: 'SET_NOTIFICATION',
      notification,
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: 'NULL'
      }, timer * 1000)
    })
  }
}

export default notificationReducer