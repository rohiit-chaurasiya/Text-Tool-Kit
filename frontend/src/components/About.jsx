import React from 'react'
import card2 from '../image/card2.png';



import '../css/about.css'

export default function About() {
  return (
    <>
    <div className="container" style={{ marginTop: '85px'}}>
        <div className="row justify-content-center">
            <div className="col-10 col-lg-8 col-md-8" style={{ textAlign:'center', fontSize:'20px' }}>
                <h1 className='display-5 mt-3' style={{ textAlign: 'center', marginTop:'200px' }}>Text Toolkit</h1>
                <small className="text-muted">Our website is a powerful text manipulation tool built using cutting-edge technologies. With our innovative
                platform, you can easily perform various text operations with just a few clicks. Whether you need to convert text to uppercase, lowercase,
                or title case, our website has got you covered. Additionally, you can remove extra spaces from your text and clear the content with a
                single button click.</small>
            </div>
        </div>
    </div>

    <div className="container" style={{ marginTop: '85px'}}>
        <div className="row justify-content-center">
            <div className="col-12 col-lg-4 col-md-6" style={{ textAlign:'center', fontSize:'20px' }}>
                <div className="card">
                    <img className="card-img-top" src={card2}  alt='card'/>
                    <div className="card-body">
                        <p className="card-text">Our website is built with React.js for a smooth user experience, Node.js and Express.js
                         for server-side handling and communication, and MongoDB for reliable and scalable data storage.</p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-4 col-md-6" style={{ textAlign:'center', fontSize:'20px' }}>
                <div className="card">
                    <img className="card-img-top" src={card2}  alt='card'/>
                    <div className="card-body">
                        <p className="card-text">Simplify text manipulation with our user-friendly platform.
                         Try it today and experience the efficiency of React.js, Node.js, Express.js, and MongoDB."</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
