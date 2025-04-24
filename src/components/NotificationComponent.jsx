import React from 'react'
import {connect} from "react-redux";
import {marknotificationasread,clearNotifications} from "../redux/actions/notifications"

function NotificationComponent({notifications,markNotNotificationAsRead,clearNotifications}) {

  return (
    <div>
{
    notifications.map((notification)=>(
        <div key={notification.id}>
            <p>
                hello world
            </p>
<p>
    {notification.message}
</p>
<button onClick={()=>markNotNotificationAsRead(notification.id)}>
    Mark as Read
</button>
        </div>
    ))
}

<button onClick={clearNotifications}>
    Clear Notifications
</button>
<p>
                hello world
            </p>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return {
        notifications:state.notifications.notifications
    }

}

const mapDispatchToProps=(dispatch)=>{
    return {
        marknotificationasread:(notificationId)=>dispatch(marknotificationasread(notificationId)),
        clearNotifications:()=>dispatch(clearNotifications())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(NotificationComponent)