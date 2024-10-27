import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faUser} from "@fortawesome/free-regular-svg-icons";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";

const Available = ({allPlayers,addSelectedPlayers}) => {
  return (
    <div className="columns-[300px] space-y-4 gap-4">
      {
        allPlayers.map((eachPlayer)=>(
          <div key={eachPlayer.id} className="break-inside-avoid border rounded-md p-3 flex flex-col gap-4">
          <img src={eachPlayer.image} alt="" className="rounded-md bg-custom-half-orange" />

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faUser} className="text-custom-orange"/>
              <h6>{eachPlayer.name}</h6>
            </div>
  
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faFlag} className="text-custom-orange"/>
                <p>{eachPlayer.team}</p>
              </div>
              <div className="">
                <b>{eachPlayer.role}</b>
              </div>
            </div>
          </div>
          <div className="grid gap-3 pt-3 border-t">
            <h6 className="">Rating</h6>
            <div className="flex items-center justify-between">
              <p className={`${eachPlayer.role!=="Bowler" && "text-black "}`}>{eachPlayer.battingHand}</p>
              <p className={`${eachPlayer.role=="Bowler" || eachPlayer.role=="All-rounder"?"text-black ":null}`}>{eachPlayer.bowlingHand=="N/A"?"Doesn't bowl":eachPlayer.bowlingHand}</p>
            </div>
  
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCircleDollarToSlot} className="text-custom-orange"/>
              <b className="text-black">{eachPlayer.price}</b>
            </div>
              {/* <span className="text-black">
                Price: $<span className="text-custom-orange"></span>
              </span> */}
              <button onClick={()=>addSelectedPlayers(eachPlayer.id)} type="button" className="cardButton">
                <p>Choose Player</p>
              </button>
            </div>
          </div>
        </div>
        ))
      }
    </div>

  );
};

Available.propTypes = {
  allPlayers: PropTypes.array.isRequired,
  addSelectedPlayers: PropTypes.func.isRequired
};

export default Available;
