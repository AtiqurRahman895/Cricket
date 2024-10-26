// import React from 'react';
// import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import footerLogo from "../assets/logo-footer.png";
import Newsletter from '../HomePage-Component/Newsletter';

const Footer = () => {
    const [newsletterSectionHeight,setNewsletterSectionHeight]=useState(0)
    const newsletterSection=useRef(null)
    useEffect(()=>{
        const updateSectionHeight=()=>{
            // if(newsletterSection.current){
            setNewsletterSectionHeight(newsletterSection.current.offsetHeight)
            // console.log(newsletterSectionHeight)
            // }
        }
        updateSectionHeight()
        window.addEventListener(`resize`,()=>{
        updateSectionHeight()

        })
    },[]) 
    // console.log(newsletterSectionHeight)



    return (
        <footer className="bg-black" style={{ paddingTop: `${newsletterSectionHeight/2}px`,marginTop:`${newsletterSectionHeight/2}px` }}>
            <div className="container wrapper grid gap-12 relative">

                <Newsletter newsletterRef={newsletterSection} newsletterHeight={newsletterSectionHeight}/>

                <img src={footerLogo} alt="" className='w-[100px] mt-6 mx-auto'/>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start text-custom-ash">
                    <div className="grid gap-4">
                        <h6 className='text-white'>About Us</h6>
                        <p className='w-[250px]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>

                    <div className="grid gap-4">
                        <h6 className='text-white'>Quick Links</h6>
                        <ul className='space-y-2 list-inside list-disc'>
                            <li> <a href="">Home</a></li>
                            <li> <a href="">Services</a></li>
                            <li> <a href="">About</a></li>
                            <li> <a href="">Contact</a></li>
                        </ul>
                    </div>

                    <div className="grid gap-4">
                        <h6 className='text-white'>Subscribe</h6>
                        <p className='w-[250px]'>Subscribe to our newsletter for the latest updates.</p>
                        <form action="https://formsubmit.co/emonhassan895@gmail.com" method="post" className="flex justify-center item-center bg-white w-fit md:w-full rounded-md text-black">
                                <input type="email" name="UserEmail" id="UserEmail" placeholder="Enter your email" required className='rounded-e-none' />
                                <button type="submit" className="font-bold bg-custom-gradient py-[.6rem] px-3 rounded-md rounded-s-none">Subscribe</button>
                            </form>
                    </div>

                </div>

            </div>

            <div className="footerCopyRights container text-custom-ash text-center mt-8 py-6 border-t">
                <span>All right reserved @Peddy 2024. Developed by <a href="https://atiqur.pages.dev/"><strong>Atiqur Rahman</strong></a></span>
            </div>
            
        </footer>
    );
};

// Footer.propTypes = {
    
// };

export default Footer;