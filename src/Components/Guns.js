import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from '../api'

function Guns() {

  let [select, setSelect] = useState('')

  let [searchString, setSearchString] = useState('')

  const [guns, setGuns] = useState([])

  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('https://nylund.dev/tarkov/public/_/items/guns?access_token=1234')
      setGuns(result.data.data)
      return guns
    };

    fetchData();  
    
  }, [])

  function weaponType(param) {
    switch(param) {
      case "assault_rifle":
        return "Assault Rifle";
        break;

      case "assault_carbine":
        return "Assault Carbine";
        break;

      case "light_machine_gun":
        return "Light Machine Gun";
        break;

      case "shotgun":
        return "Shotgun";
        break;

      case "pistol":
        return "Pistol";
        break;

      case "marksman_rifle":
        return "Marksman Rifle";
        break;

      case "sniper_rifle":
        return "Sniper Rifle";
        break;
    }
  }
  
  return(
    <div className="container">
          <div className="row">
            <div className="float-left">
              <h1 style={{textTransform: "capitalize"}}>Guns</h1>
              </div>
            <div className="float-right"><input className="float-right" type="text" value={searchString} onChange={(e) => {
              setFiltered(guns)
              const test = guns.filter(gun => {
                return gun.name_of_gun.toLowerCase().includes(e.target.value.toLowerCase())
              });
              setFiltered(test)
              setSearchString(e.target.value)
            }} placeholder="Type here" />
            </div>
            </div>
            <div className="row">
            { searchString.length > 0 ? (filtered.map(gun => (
              <div key={gun.id} className="col-sm-12 col-md-4 col-lg-3">
              <Link to={{
                pathname: "/guns/" + gun.name_of_gun,
                state: {
                  gunID: gun.id,
                  imageID: gun.gun_image
                }
              }}>
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h4 className="card-title" style={{textTransform: "capitalize"}}>{gun.name_of_gun}</h4>
                  <h6 className="card-title" style={{textTransform: "capitalize"}}>{weaponType(gun.weapon_type)}</h6>
                </div>
              </div>
              </Link>
          </div>
            ))) : (guns.map(gun => (
              <div key={gun.id} className="col-sm-12 col-md-4 col-lg-3">
              <Link to={{
                pathname: "/guns/" + gun.name_of_gun,
                state: {
                  gunID: gun.id,
                  imageID: gun.gun_image
                }
              }}>
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h4 className="card-title" style={{textTransform: "capitalize"}}>{gun.name_of_gun}</h4>
                  <h6 className="card-title" style={{textTransform: "capitalize"}}>{weaponType(gun.weapon_type)}</h6>
                </div>
              </div>
              </Link>
          </div>
            )))}
            </div>
          </div>
  )
}

export default Guns;