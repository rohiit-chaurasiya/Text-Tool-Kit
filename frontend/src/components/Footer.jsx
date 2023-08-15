import React from 'react'
import '../css/Footer.css'

import githubImg from '../image/github.png';
import instaImage from '../image/insta.png';
import linkedInImage from '../image/linkedin.png'

export default function Footer() {
  return (
    <div>
        <footer className="footer-distributed mt-5">
            <div className="footer-left">
                <h3>Text<span>Toolkit</span></h3>
                <p className="footer-company-name">Aayushmaan Community © 2023</p>
            </div>
            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Developer :  </span> Rohit Chaurasia</p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+91-8840854918</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:rohiit.chaurasiya@gmail.com">rohiit.chaurasiya@gmail.com</a></p>
                </div>
            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                    <span>Social Media</span>
                    <a href="https://github.com/RohitAayushmaan" target="_blank" rel="noopener noreferrer" className='mx-2'>
                        <img src={githubImg} alt="GitHub" width={28} height={28} /> 
                    </a>
                    <a href="https://www.linkedin.com/in/rohiitchaurasia" target="_blank" rel="noopener noreferrer" className='mx-2'>
                        <img src={linkedInImage} alt="LinkedIn" width={35} height={35} />
                    </a>
                    <a href="https://www.instagram.com/aayushmaan_rohit/" target="_blank" rel="noopener noreferrer" className='mx-2'>
                        <img src={instaImage} alt="Instagram" width={35} height={35} />
                    </a>   
                </p>
            </div>
        </footer>
    </div>
  )
}
