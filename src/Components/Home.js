import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: null,
    };
  }

  async componentDidMount() {
    const questions = (await axios.get('https://nylund.dev/tarkov/public/_/collections?access_token=1234')).data;
    this.setState({
      questions: questions.data,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.questions === null && <p>Loading data...</p>}
          {
            this.state.questions && this.state.questions.map(question => question.managed === true ? (

              <div key={question.collection} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/${question.collection}`}>
                  <div className="card text-white card-bg-gray mb-3">
                    <div className="card-body">
                      <h4 className="card-title" style={{textTransform: "capitalize"}}>{question.collection}</h4>
                    </div>
                  </div>
                  </Link>
              </div>
            ): ( <div></div>)
            )}
        </div>
      </div>
    )
  }
}

export default Home;