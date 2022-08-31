import './Notification.css'

const Notification = (props) => {
    console.log("data: " + props.data.Name)

    return(
        <div className='notification'>
            Thanks for subscribing Rupesh!
        </div>
    )

}

export default Notification;