// import React from 'react';
// import PropTypes from 'prop-types';
import Available from "./Available";
import Selected from "./Selected";

const Players = () => {
  return (
    <section className="py-12">
      <div className="container wrapper flex flex-col gap-4">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8">
          <h4 className="">Available Players</h4>
          <div className="flex items-center border rounded-md">
            <button type="button" className="tabButton rounded-s-md">
              Available
            </button>
            <button type="button" className="tabButton activeTabButton rounded-e-md">
              Selected (0/11)
            </button>
          </div>
        </div>

        <Available/>
        <Selected/>

      </div>
    </section>
  );
};

// Players.propTypes = {

// };

export default Players;
