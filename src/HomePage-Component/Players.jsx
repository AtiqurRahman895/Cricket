// import React from 'react';
// import PropTypes from 'prop-types';
import { useState } from "react";
import Available from "./Available";
import Selected from "./Selected";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const Players = ({allPlayers,coins,changeCoinAmount})=> {
  const [showAvailable, setAvaiable] =useState(true)
  const [selectedPlayers, setSelectedPlayers] =useState([])
  const toggleAvailable=(status)=>{
    setAvaiable(status)
  }



  const addSelectedPlayers=(playersId)=>{

    const selectedPlayer =allPlayers.find(player=>player.id===playersId)


    if(selectedPlayer.price<=coins){
      if(selectedPlayers.length<11){
        if(selectedPlayers.some(player=>player.id == playersId)){
          toast.warning(`You've already selected ${selectedPlayer.name} once.`);
        }else{
          toast.success(`You've selected ${selectedPlayer.name}.`)
          setSelectedPlayers((preSelections=>[...preSelections,selectedPlayer]))
          changeCoinAmount(selectedPlayer.price,"sub")
        }
      }else{
        toast.error("You can only select up to 11 players. If you wish to choose new ones, please delete a player from your current selection.")
      }
    }else{
      toast.error("You currently lack the necessary coins to claim this player. Please obtain free coins first.")
    }


  }

  console.log(selectedPlayers)


  const removeSelectedPlayers= async (playersId)=>{

    const remainingPlayers = selectedPlayers.filter(player=>player.id !== playersId)
    setSelectedPlayers(remainingPlayers)
    const selectedPlayer =allPlayers.find(player=>player.id===playersId)

    toast.info(`Removed ${selectedPlayer.name} from the Selection`)
    changeCoinAmount(selectedPlayer.price,"sum")

    
  }


  
  return (
    <section className="py-12">
      <div className="container wrapper flex flex-col gap-12">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* ${allPlayers.length?"Available Players":"Loading..."} */}
          {showAvailable?<h4 className="">Available Players</h4>:
          <h4 className="">Selected Players (({selectedPlayers.length}/11))</h4>}
          
          <div className="flex items-center border rounded-md">
            <button onClick={()=>toggleAvailable(true)} type="button" className={`tabButton rounded-s-md ${showAvailable && "activeTabButton"}`}>
              Available
            </button>
            <button onClick={()=>toggleAvailable(false)} type="button" className={`tabButton rounded-e-md ${!showAvailable && "activeTabButton"}`}>
              Selected ({selectedPlayers.length}/11)
            </button>
          </div>
        </div>

        
        
        {showAvailable?
        <Available allPlayers={allPlayers} addSelectedPlayers={addSelectedPlayers}/>:
        <Selected selectedPlayers={selectedPlayers} removeSelectedPlayers={removeSelectedPlayers}/>
        }

        {!showAvailable && <button onClick={()=>toggleAvailable(true)} type="button" className="primaryButton w-fit">{selectedPlayers.length?"Add more":"Add Players"}</button>}

      </div>
    </section>
  );
};

Players.propTypes = {
  allPlayers: PropTypes.array.isRequired,
  coins: PropTypes.number.isRequired,
  changeCoinAmount: PropTypes.func.isRequired,

};

export default Players;
