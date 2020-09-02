/*import React from 'react'
import { useSelector } from 'react-redux'
//import notificationReducer from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notifications)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notification === '') {
    return null
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification*/

import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notification === '') {
    return null
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notifications
  }
} 

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification