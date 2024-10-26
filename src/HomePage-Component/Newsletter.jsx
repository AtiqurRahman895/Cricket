// import React from 'react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import heroBgImage from '../assets/bg-shadow.png'

const Newsletter = ({newsletterHeight,newsletterRef}) => {
    return (
    <div ref={newsletterRef} className="border border-white rounded-2xl p-4 absolute w-full" style={{ top: `-${newsletterHeight}px`}}>
        <div className="rounded-2xl bg-white">
            <div className="py-8 md:py-12 px-5 md:px-8 text-center grid gap-2 rounded-2xl" style={{backgroundImage:`url(${heroBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <h3 className="">Subscribe to our Newsletter</h3>
                <b>Get the latest updates & news right in your inbox!</b>
                <form action="https://formsubmit.co/emonhassan895@gmail.com" method="post"  className="flex flex-wrap justify-center item-center gap-2 mt-3">
                    <input type="email" name="UserEmail" id="UserEmail" placeholder="Enter your email" required />
                    <button type="submit" className="font-bold bg-custom-gradient py-[.6rem] px-3 rounded-md">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
    );
};

Newsletter.propTypes = {
    newsletterHeight: PropTypes.number.isRequired,
    newsletterRef: PropTypes.oneOfType([
        PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
        PropTypes.shape({ current: PropTypes.null })
      ]),
};

export default Newsletter;