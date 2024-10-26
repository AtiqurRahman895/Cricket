// import React from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroImage from "../assets/banner-main.png";
import { faFlag, faUser } from "@fortawesome/free-regular-svg-icons";

const Available = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-fit ">
      <div className="border rounded-md p-3 flex flex-col gap-4 h-fit">
        <img src={heroImage} alt="" className="rounded-md" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faUser} />
            <h6>Viratl Kholi</h6>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faFlag} />
              <p>Bangladesh</p>
            </div>
            <div className="py-[.35rem] px-3 rounded-md bg-custom-ash">
              All-Rounder
            </div>
          </div>
        </div>
        <div className="grid gap-3 pt-3 border-t">
          <b className="text-black">Rating</b>
          <div className="flex items-center justify-between">
            <p>Left-Hand-bat</p>
            <p className="text-black">Right-arm leg break</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-black">
              Price: $<span className="text-custom-orange">1500000</span>
            </span>
            <button type="button" className="cardButton activeCardButton">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Available.propTypes = {

// };

export default Available;
