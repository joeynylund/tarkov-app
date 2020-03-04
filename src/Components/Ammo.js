import React, {Component} from 'react';
import axios from 'axios';

class Ammo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const questions = (await axios.get(`https://nylund.dev/tarkov/public/_/items/Ammo?access_token=1234`)).data;
    this.setState({
      questions: questions.data,
      title: params.questionCollection
    });
  }


render() {
      return (
        <div className="container">
          <div className="row">
            <h1 style={{textTransform: "capitalize"}}>Ammo</h1>
            </div>
            <div className="row">
            {this.state.questions === null && <p>Loading questions...</p>}
            {
              this.state.questions && this.state.questions.map(question =>  (
  
                <div key={question.id} className="col-sm-12 col-md-4 col-lg-3">
                  <div className="card text-white bg-success mb-3">
                    <div className="card-body">
                      <h4 className="card-title" style={{textTransform: "capitalize"}}>{question.caliber_of_ammo}</h4>
                    </div>
                  </div>
              </div>
            
              ))}
          </div>
        </div>
      );

  }
  
          }


export default Ammo;