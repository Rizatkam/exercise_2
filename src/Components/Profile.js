import React from 'react'


const Profile = (props) => {
return (
<div>
<h3>Email : {props.data.email}</h3>
<h3>Password : {props.data.password}</h3>
<h3>Address : {props.data.address}</h3>
<h3>City : {props.data.city}</h3>
<h3>State : {props.data.state}</h3>
<h3>Zip : {props.data.zip}</h3>
</div>
)
}
export default Profile