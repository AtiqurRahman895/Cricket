
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";

const Selected = ({selectedPlayers,removeSelectedPlayers}) => {

    console.log(selectedPlayers)
    return (
        <div className="grid grid-cols-1 gap-4 h-fit">
            {selectedPlayers.map((eachPlayer,index)=>(
            <div key={index} className="border rounded-md p-3 flex flex-row justify-between items-center gap-4">
            <div className="flex gap-3 items-center w-fit">
                <img src={eachPlayer.image} alt="" className="w-[70px] border rounded-md" />
                <div className="grid justify-between content-between">
                    <h6>{eachPlayer.name}</h6>
                    <p>{eachPlayer.role}</p>
                    <span className="text-custom-orange">$<span className="text-custom-black">{eachPlayer.price}</span></span>
                </div>
            </div>
            <FontAwesomeIcon onClick={()=>removeSelectedPlayers(eachPlayer.id)} icon={faTrashCan} className="cursor-pointer text-custom-red hover:bg-custom-ash duration-500 p-2 rounded-full "/>

           </div>
            ))}

        </div>
    );
};

Selected.propTypes = {
    selectedPlayers: PropTypes.array.isRequired,
    removeSelectedPlayers: PropTypes.func.isRequired
};

export default Selected;