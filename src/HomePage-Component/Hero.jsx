// import React from 'react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import heroImage from '../assets/banner-main.png'
import heroBgImage from '../assets/bg-shadow.png'

const Hero = ({changeCoinAmount}) => {
    return (
        <section className="">
            <div className="container wrapper">
            <div className="bg-black rounded-2xl">
                <div className='px-8 py-16 text-center flex flex-col items-center gap-4 rounded-2xl' style={{backgroundImage:`url(${heroBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <img src={heroImage} alt=" " className="w-[245px]" />
                <h2 className='text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <h5 className='text-custom-ash'>Beyond Boundaries Beyond Limits</h5>
                <div onClick={()=>changeCoinAmount(2000000,"sum")} className="p-[.35rem] border border-custom-orange rounded-md">
                    <button type='button' className='primaryButton'>Claim Free Credit</button>
                </div>
                </div>

            </div>
            </div>

        </section>
    );
};

Hero.propTypes = {
    changeCoinAmount: PropTypes.func.isRequired
};

export default Hero;