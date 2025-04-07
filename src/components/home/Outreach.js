import React from "react";


export default function Outreach() {
  /* const [showList, setShowList] = React.useState(false);
  const [showList] = React.useState(false);
  console.log('🚀 ~ Outreach ~ showList', showList); */
  return (
    <section className="outreach-section container">
      {
       <div className="hiringgraphics"> 
       
          <div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc1SaoZ1k0XEZjOC6B_mNFtPYTPU6yLrLs3-TM0u3dSnlFrzw/viewform?usp=sharing"
             >
             <img src = "https://lh6.googleusercontent.com/d/1DiyxNqqy4N-z1eBTwbDBCCexf5OxWn6K" style = {{width: 550, height: 559 }} alt = "YAM 2025 Performance Contest" />
            </a>

          </div>
          <div>
            <a
              href="https://forms.gle/sWRKfGPfRojY7AgUA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require('../../assets/home/outreach/marketingoutreach.JPG')} style={{ width: 550, height: 550 }} alt="now hiring application in bio" />
            </a>
          </div>

        
          <div>
            <a
              href="https://forms.gle/Tn7Lb7JbC7AX3EYi8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require('../../assets/home/outreach/financeoutreach.PNG')} style={{ width: 550, height: 550 }} alt="now hiring application in bio" />
            </a>
          </div>

         
          <div>
            <a
              href="https://forms.gle/1atUgfDb4NGxAbTT8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require('../../assets/home/outreach/graphicsoutreach.PNG')} style={{ width: 550, height: 550 }} alt="now hiring application in bio" />
            </a>
          </div>

        
          <div>
            <a
              href="https://forms.gle/4PDLd6h1vARe9onf8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require('../../assets/home/outreach/techoutreach.PNG')} style={{ width: 550, height: 550 }} alt="now hiring application in bio" />
            </a>
          </div>

         
          <div>
            <a
              href="https://forms.gle/YdXeRECVvUdmsZc98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require('../../assets/home/outreach/secretaryoutreach.PNG')} style={{ width: 550, height: 550 }} alt="now hiring application in bio" />
            </a>
          </div>
     </div>
/*
      <p>
        <button
          className={`incentive-list-btn${showList ? ' expand' : ''}`}
          type="button"
          onClick={() => setShowList((prevShowList) => !prevShowList)}
          tabIndex={0}
          aria-expanded={showList}
          aria-controls="incentive-list"
        >
          Incentives for joining YAM
        </button>
        <ul
          className={`list-group list-group-flush incentive-list${showList ? ' expand' : ''}`}
          id="incentive-list"
        >
          <li className="list-group">Connect with artists around the world/networking opportunities</li>
          <li className="list-group">Get work experience with an international 501(c)3 nonprofit organization</li>
          <li className="list-group">Looks good on college applications!</li>
          <li className="list-group">Develop leadership and organization skills</li>
          <li className="list-group">Work towards our mission of getting the arts to be taken more seriously and elevating young artists</li>
          <li className="list-group">Form bonds with our team: a variety of people with similar interests and goals</li>
          <li className="list-group">Get to directly benefit the community by organizing events and through donations</li>
          <li className="list-group">Get community service hours (our organization is eligible for the President’s Volunteer Service Award)</li>
          <li className="list-group">Opportunities to get promoted inside the organization</li>
          <li className="list-group">Get to partner with other organizations and individuals with similar goals/missions</li>

        </ul>

      </p>
*/

      }
    </section>
  )
}

