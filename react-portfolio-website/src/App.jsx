import React from 'react'
import Socials from './components/Socials';
import 'font-awesome/css/font-awesome.min.css';
import Resume from './components/Resume'
import Headshot from './components/Headshot'

const App = () => {
  const text = "DATA SCIENTIST - TRAVELER - VIBE PROVIDER - DATA SCIENTIST - TRAVELER - VIBE PROVIDER - "
  return (
    <>
      <div className='mainFlex'>
        <header className='header'>
          <h5>Nick Thome</h5>
          <Resume />
        </header>
        <div className="center-container">
          <div className="image-text-wrapper">
            <Headshot/>
            <div className="circle-wrapper">
          <circle className="circle" cx="125" cy="125" r="125" fill="gray" />
            <svg className="spinning-text" viewBox="0 0 250 250">
            <path id="textPath" d="M 122.5, 122.5 m -132.5, 0 a 132.5,132.5 0 1,1 265,0 a 132.5,132.5 0 1,1 -265,0" fill="none"></path>
              <text fill="white" fontSize="17">
                <textPath href="#textPath" startOffset="0%">
                  {text}
                </textPath>
              </text>
            </svg>
          </div>
          </div>
        </div>
        <Socials />
      </div>
    </>
  )
}



export default App
