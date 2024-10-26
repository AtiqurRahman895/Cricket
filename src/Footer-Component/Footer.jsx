// import React from 'react';
// import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import heroBgImage from '../assets/bg-shadow.png'
import footerLogo from "../assets/logo-footer.png";

const Footer = () => {
    const [newslatterSectionHeight,setNewslatterSectionHeight]=useState(0)
    const newslatterSection=useRef(null)
    useEffect(()=>{
        const updateSectionHeight=()=>{
            // if(newslatterSection.current){
            setNewslatterSectionHeight(newslatterSection.current.offsetHeight)
            // console.log(newslatterSectionHeight)
            // }
        }
        updateSectionHeight()
        window.addEventListener(`resize`,()=>{
        updateSectionHeight()

        })
    },[]) 
    console.log(newslatterSectionHeight)



    return (
        <footer className="bg-black" style={{ paddingTop: `${newslatterSectionHeight/2}px`,marginTop:`${newslatterSectionHeight/2}px` }}>
            <div className="container wrapper grid gap-12 relative">

                <div ref={newslatterSection} className="border border-white rounded-2xl p-4 absolute w-full" style={{ top: `-${newslatterSectionHeight}px`}}>
                    <div className="rounded-2xl bg-white">
                        <div className="py-8 md:py-12 px-5 md:px-8 text-center grid gap-2 rounded-2xl" style={{backgroundImage:`url(${heroBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <h3 className="">Subscribe to our Newsletter</h3>
                            <b>Get the latest updates & news right in your inbox!</b>
                            <form action="" className="flex flex-wrap justify-center item-center gap-2 mt-3">
                                <input type="email" name="UserEmail" id="UserEmail" placeholder="Enter your email" required />
                                <button type="submit" className="font-bold bg-custom-gradient py-[.6rem] px-3 rounded-md">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>

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
                        <form action="" className="flex justify-center item-center bg-white w-fit md:w-full rounded-md text-black">
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