import React from "react"
import Picture from "../images/profile_pic.jpeg"

function ProfilePic() {
    return (
        <div>
            <img src = {Picture} alt="komal rathi"
                style = {
                    {
                        width:"17rem",
                        borderRadius:"100%",
                        display:"flex",
                        margin:"0.5rem",
                        flexDirection:"column",
                        justifyContent:"flex-start",
                        flexWrap:"wrap",
                        alignItems:"center",
                    }
                }/>
        </div>
    )
}

export default ProfilePic