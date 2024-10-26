// import React from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerLogo from "../assets/logo-footer.png";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Selected = () => {
    return (
        <div className="grid grid-cols-1 gap-4 h-fit">
            <div className="border rounded-md p-3 flex flex-row justify-between items-center gap-4">
                <div className="flex gap-3 items-center w-fit">
                    <img src={footerLogo} alt="" className="w-[50px] border rounded-md" />
                    <div className="grid justify-between content-between">
                        <h6>Virat Kholi</h6>
                        <p>Left-Hand Bowler</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer text-custom-red hover:bg-custom-ash duration-500 p-2 rounded-full "/>

            </div>
        </div>
    );
};

// Selected.propTypes = {
    
// };

export default Selected;