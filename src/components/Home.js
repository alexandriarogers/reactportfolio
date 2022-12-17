import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Home.css"


function Home() {
  return (
    <div className="home">
        <div className='intro'>
            <h2>Hello! I am Alexandria.</h2>
            <div className="description"> 
                <p>
                    Welcome to my portfolio!
                </p> 
                <Link to="portfolio">
                    <button className='projectButton'>Veiw My projects here.</button>
                </Link>
            </div>
            <div className='pic'>
                

            </div>
        </div>
    </div>
  )
}

export default Home