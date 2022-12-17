import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <a href="https://www.linkedin.com/in/alexandria--rogers/" target="blank">
                <LinkedInIcon />
            </a>
            <a href="https://github.com/alexandriarogers" target="blank">
                <GitHubIcon />
            </a>
        </div>
        <p>
            Created by Alexandria Rogers 2022
        </p>
    </div>
  )
}

export default Footer