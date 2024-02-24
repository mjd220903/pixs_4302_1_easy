import React from 'react'
import img1 from '../Components/logo1.png'

const Home = (props) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        overflow: 'auto',
        minHeight: '100vh',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundImage: 'linear-gradient(to bottom, #ffffff 20%, #c4ff48 80%)',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'flex-start',
          flex: '0 0 auto',
          alignSelf: 'center',
          justifyContent: 'center',
          textJustify: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '154px',
            alignItems: 'flex-start',
            flex: '0 0 auto',
          }}
        >
          <span>February 3-4, 2022</span>
          <span>February 3-4, 2022</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '168px',
            alignItems: 'flex-start',
            flex: '0 0 auto',
          }}
        >
          <span>Online and Anywhere</span>
          <span>Online and Anywhere</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '154px',
            alignItems: 'flex-start',
            flex: '0 0 auto',
          }}
        >
          <span>February 3-4, 2022</span>
          <span>February 3-4, 2022</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '168px',
            alignItems: 'flex-start',
            flex: '0 0 auto',
          }}
        >
          <span>Online and Anywhere</span>
          <span>Online and Anywhere</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '154px',
            alignItems: 'flex-start',
            flex: '0 0 auto',
          }}
        >
          <span>February 3-4, 2022</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '168px',
            alignItems: 'flex-start',
            flex: '0 0 auto',
          }}
        >
          <span>Online and Anywhere</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '154px',
            alignItems: 'flex-start',
            flex: '0 0 auto',
          }}
        >
          <span>February 3-4, 2022</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '168px',
            alignItems: 'flex-start',
            flex: '0 0 auto',
          }}
        >
          <span>Online and Anywhere</span>
        </div>
      </div>
      <div class="line" style={{ borderTop: '1px solid black'}}></div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '75px',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          type="button"
          style={{
            borderRadius: '40px',
            height: '30px',
            width: '130px',
            backgroundColor: 'transparent',
          }}
        >
          <span>
            <span>
              The Lineup</span>
            <br></br>
          </span>
        </button>
        <button
          type="button"
          style={{
            borderRadius: '40px',
            height: '30px',
            width: '130px',
            backgroundColor: 'transparent',

          }}
        >
          <span>
            <span>About</span>
            <br></br>
          </span>
        </button>
        <button
          type="button"
          style={{
            borderRadius: '40px',
            height: '30px',
            width: '130px',
            backgroundColor: 'transparent',

          }}
        >
          <span>
            <span>Briefs</span>
            <br></br>
          </span>
        </button>
        <button
          type="button"
          style={{
            borderRadius: '40px',
            height: '30px',
            width: '130px',
            backgroundColor: 'transparent',

          }}
        >
          <span>
            <span>Schedule</span>
            <br></br>
          </span>
        </button>
        <button
          type="button"
          style={{
            borderRadius: '40px',
            height: '30px',
            width: '130px',
            backgroundColor: 'transparent',

          }}
        >
          <span>
            <span>Winners</span>
            <br></br>
          </span>
        </button>
        <img
          alt="img1"
          src={img1} 
          />
      </div>
      <div class="line" style={{ borderTop: '1px solid black'}}></div>

    </div>
    
  )
}

export default Home
