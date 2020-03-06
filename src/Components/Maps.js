import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from '../api'

function Maps() {

  const [maps, setMaps] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('https://nylund.dev/tarkov/public/_/items/maps?access_token=1234')
      setMaps(result.data.data)
      return maps
    };

    fetchData();  
    
  }, [])

  return(
    <div className="container">
          <div className="row">
            <div className="float-left">
              <h1 className="title" style={{textTransform: "capitalize"}}>Maps</h1>
              </div>
            </div>
            <div className="row">
            {maps.length === 0 && <p>Loading maps...</p>}
            {maps.length !== 0 && maps.map(map => (
              <div key={map.id} className="col-sm-12 col-md-4 col-lg-3">
              <Link to={{
                pathname: "/maps/" + map.map_name,
              }}>
              <div className="card text-white card-bg-gray mb-3">
                <div className="card-body">
                  <img style={{width: '100%'}} src={'https://nylund.dev/tarkov/public/uploads/_/originals/' + map.map_name + '_thumb.png'} alt={map.map_name} />
                  <h4 className="card-title" style={{textTransform: "capitalize", marginTop: '20px'}}>{map.map_name}</h4>
                  <h6 className="" style={{textTransform: "capitalize"}}>{map.duration}</h6>
                  <p className="" style={{textTransform: "capitalize"}}>Players: {map.players}</p>
                </div>
              </div>
              </Link>
          </div>
            ))}
            </div>
          </div>
  )
}

export default Maps;