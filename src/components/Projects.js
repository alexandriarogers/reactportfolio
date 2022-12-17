import React from 'react'
import "../styles/Projects.css"
import ProjectItem from './ProjectItem'
import EcommerceImage from "../assets/ecommerceBackendImg.webp"
import EmployeeTrackerImage from "../assets/employeeTrackerImg.jpeg"
import JavaScriptQuizImage from "../assets/javascriptQuizImg.png"
import NoteTakerImage from "../assets/noteTakerImg.webp"
import TeamProfileImage from "../assets/teamProfileGeneratorImg.jpeg"
import WeatherDashboardImage from "../assets/weatherDashboardImg.jpeg"


function Projects() {
  return (
    <div className='projects'>
        <h1>My Projects</h1>
        <div className='projectList'>
            <a href="https://github.com/alexandriarogers/ecommerce-backend" target="blank">
                <ProjectItem name="Ecommerce Backend" image={EcommerceImage}/>
            </a>
            <a href="https://github.com/alexandriarogers/employee-tracker" target="blank">
                <ProjectItem name="Employee Tracker" image={EmployeeTrackerImage}/>
            </a> 
            <a href="https://github.com/alexandriarogers/JavaScript-Quiz" target="blank">
                <ProjectItem name="JavaScript Quiz" image={JavaScriptQuizImage}/>
            </a> 
            <a href="https://github.com/alexandriarogers/note-taker-express.jsd" target="blank">
                <ProjectItem name="Note Taker App" image={NoteTakerImage}/>
            </a> 
            <a href="https://github.com/alexandriarogers/Team-Profile-Gen" target="blank">
                <ProjectItem name="Team Profile Generator" image={TeamProfileImage}/>
            </a> 
            <a href="https://github.com/alexandriarogers/Weather-Dashboard" target="blank">
                <ProjectItem name="Weather Dashboard" image={WeatherDashboardImage}/>
            </a>     
        </div>
    </div>
    
  )
}

export default Projects