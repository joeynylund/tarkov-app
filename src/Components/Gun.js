import React, {useState, useEffect} from 'react';
import api from '../api'

function Gun({match, location}) {

  const [gunInfo, setGunInfo] = useState([]);

  const [gunImage, setGunImage] = useState('');

  const fetchData = async () => {
    const result = await api.get('https://nylund.dev/tarkov/public/_/items/guns?access_token=1234')
    setGunInfo(result.data.data.filter(gun => gun.name_of_gun.match(match.params.gunName)))

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


  const FetchImage = (props) => {
    
    fetch('https://nylund.dev/tarkov/public/_/files/' + props.id + '?access_token=1234')
    .then(response => response.json())
    .then(data => {
      setGunImage(data.data.filename);
      })
      return <img className="gun-image" src={'https://nylund.dev/tarkov/public/uploads/_/originals/' + gunImage} />
  }

      return (
        
        <div className="container">
          {gunInfo.length === 0 && <p>Loading data...</p>}
          {gunInfo.length !== 0 && gunInfo.map( gun => (<div key={gun}>
          <div className="row">
            <h1 style={{textTransform: "capitalize"}}>{match.params.gunName}</h1>
          </div>
          <div className="row">
            <h4 style={{textTransform: "capitalize"}}>{weaponType(gun.weapon_type)}</h4>
          </div>
          <div className="row">
            <h6 style={{textTransform: "capitalize"}}>Firing Mode: {firing_Mode(gun.firing_mode.length)}</h6>
          </div>
          <div className="row">
            <FetchImage id={gun.gun_image} />
          </div>
          <div className="row">
            <h6 style={{textTransform: "capitalize"}}>Vertical Recoil: {gun.vertical_recoil}</h6>
          </div>
          <div className="row">
            <h6 style={{textTransform: "capitalize"}}>Horizontal Recoil: {gun.horizontal_recoil}</h6>
          </div>
          <div className="row">
            <h6 style={{textTransform: "capitalize"}}>Ammo Caliber: {gun.caliber_used}</h6>
          </div></div>
          ))}
          
        </div>

      );

  }
  


export default Gun;