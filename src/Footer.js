import React, { Fragment } from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <Fragment>

            <div className="end">

                <div className="end1">
                    <p className="end12" style={{ marginTop: '30%' }}>Coursera</p>
                    <p className="end111">About</p>
                    <p className="end111">What We Offer</p>
                    <p className="end111">Leadership </p>
                    <p className="end111">Careers</p>
                    <p className="end111">Catalog</p>
                    <p className="end111">Coursera Plus</p>
                    <p className="end111">Professional Certificates</p>
                    <p className="end111">MasterTrack® Certificates</p>
                    <p className="end111">Degrees</p>
                    <p className="end111">For Enterprise</p>
                    <p className="end111">For Government</p>
                    <p className="end111">Coronavirus Response</p>
                </div>

                <div className="end2">
                    <p className="end12" style={{ marginTop: '30%' }}>Community</p>
                    <p className="end222">Learners</p>
                    <p className="end222">Partners</p>
                    <p className="end222">Developers</p>
                    <p className="end222">Beta Testers</p>
                    <p className="end222">Translators</p>
                    <p className="end222">Blog</p>
                    <p className="end222">Tech Blog</p>
                    <p className="end222">Teaching Center</p>
                </div>
                <div className="end3">
                    <p className="end12" style={{ marginTop: '30%' }}>More</p>
                    <p className="end333">Press</p>
                    <p className="end333">Investors</p>
                    <p className="end333">Terms</p>
                    <p className="end333">Privacy</p>
                    <p className="end333">Help</p>
                    <p className="end333">Accessibility</p>
                    <p className="end333">Contact</p>
                    <p className="end333">Articles</p>
                    <p className="end333">Directory</p>
                    <p className="end333">Affiliates</p>
                </div>
                <div className="end4">
                    <img src="https://i.ibb.co/LzZ4qfr/en-generic-rgb-wo-45.png" alt=" play store logo"
                        style={{ width: '60%', marginLeft: '18%', marginTop: '28%' }} />

                    <img src="https://i.ibb.co/4Px3n06/apple.png" alt=" apple logo"
                        style={{ width: '60%', marginLeft: '18%', marginTop: '10%' }} />

                    <img src="https://i.ibb.co/n8mN0TM/verified.png" alt="copyright"
                        style={{ width: '60%', marginLeft: '18%', marginTop: '10%' }} />

                </div>

            </div>


            <div className="foot">

                <p className="foot1" style={{fontWeight:'bold', fontSize:'20px'}}>© 2022 Coursera Inc.
                    All rights reserved.</p>
                <a style={{float:'left', marginTop:'-3%', marginLeft:'80%'}} href="#" className="fa fa-facebook"></a>
                <a style={{float:'left', marginTop:'-3%', marginLeft:'83%'}} href="#"  className="fa fa-twitter"></a>
                <a style={{float:'left', marginTop:'-3%', marginLeft:'86%'}} href="#" className="fa fa-instagram"></a>
                <a style={{float:'left', marginTop:'-3%', marginLeft:'89%'}} href="#" className="fa fa-youtube"></a>
                <a style={{float:'left', marginTop:'-3%', marginLeft:'92%'}} href="#" className="fa fa-linkedin"></a>

            </div>

        </Fragment>
    )
}

export default Footer