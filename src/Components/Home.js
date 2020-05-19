import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [collections, setCollections] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetch = (await axios.get('https://nylund.dev/tarkov/public/_/collections?access_token=1234')).data;
      setCollections(fetch.data)
    }

    fetchData()
  })

    return (
      <div className="container">
        <div className="row">
          {collections === '' && <p>Loading data...</p>}
          {
            collections && collections.map(element => element.managed === true ? (

              <div key={element.collection} className="col-sm-12 col-md-6 col-lg-3">
                <Link to={`/${element.collection}`}>
                  <div className="card text-white card-bg-gray mb-3">
                    <div className="card-body">
                      <h4 className="card-title" style={{textTransform: "capitalize"}}>{element.collection}</h4>
                    </div>
                  </div>
                  </Link>
              </div>
            ): ( <div></div>)
            )}
        </div>
        <div className="row">

        </div>
      </div>
    )
  }


export default Home;