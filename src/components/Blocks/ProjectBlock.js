import React from 'react'
import ProjectIcon from '../Icons/ProjectIcon'

function ProjectBlock(props) {
    return(
        <div className="block">
            
            <ProjectIcon /> 

                <div style={
                    {
                        justifyContent:"center",
                        alignItems:"center",
                    }
                }>
                    <h3> {props.project} </h3>
                    <h4> {props.date} </h4>
                    <p> {props.info} </p>
                </div>
                
            </div>
    )
}

export default ProjectBlock