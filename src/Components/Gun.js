import React, {useState, useEffect} from 'react';
import api from '../api'

function Gun({match, location}) {

  const [gunInfo, setGunInfo] = useState([]);

  const [gunImage, setGunImage] = useState([]);

  const [firingMode, setFiringMode] = useState([]);

  const fetchData = async () => {
    const result = await api.get('https://nylund.dev/tarkov/public/_/items/guns/' + location.state.gunID + '?access_token=1234')
    setGunInfo(result.data.data)
    setFiringMode(result.data.data.firing_mode)
    const image = await api.get('https://nylund.dev/tarkov/public/_/files/' + location.state.imageID + '?access_token=1234')
    setGunImage(image.data.data.data)
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [])

  function weaponType(param) {
    switch(param) {
      case "assault_rifle":
        return "Assault Rifle";

      case "assault_carbine":
        return "Assault Carbine";

      case "light_machine_gun":
        return "Light Machine Gun";

      case "shotgun":
        return "Shotgun";

      case "pistol":
        return "Pistol";

      case "marksman_rifle":
        return "Marksman Rifle";

      case "sniper_rifle":
        return "Sniper Rifle";

      default:
        return "";
    }
  }

  function firing_Mode(param) {
    switch(param) {
      case 2:
        return "Single Fire";

      case 3:
        return "Single Fire, Full Auto";

      default:
        return "";
    }
  }

      return (
        
        <div className="container">
          {gunInfo.length === 0 && <p>Loading data...</p>}
          {gunInfo.length !== 0 && <div>
          <div className="row">
            <h1 style={{textTransform: "capitalize"}}>{match.params.gunName}</h1>
          </div>
          <div className="row">
            <h4 style={{textTransform: "capitalize"}}>{weaponType(gunInfo.weapon_type)}</h4>
          </div>
          <div className="row">
            <h6 style={{textTransform: "capitalize"}}>Firing Mode: {firing_Mode(firingMode.length)}</h6>
          </div>
          <div className="row">
            <img alt="Gun" src={gunImage.full_url} />
          </div>
          <div className="row">
            <h6 style={{textTransform: "capitalize"}}>Vertical Recoil: {gunInfo.vertical_recoil}</h6>
          </div>
          <div className="row">
            <h6 style={{textTransform: "capitalize"}}>Horizontal Recoil: {gunInfo.horizontal_recoil}</h6>
          </div>
          <div className="row">
            <h6 style={{textTransform: "capitalize"}}>Ammo Caliber: {gunInfo.caliber_used}</h6>
          </div></div>
          }
          
        </div>

      );

  }
  


export default Gun;