import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      gunID: null
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const questions = (await axios.get(`https://nylund.dev/tarkov/public/_/items/guns?access_token=1234`)).data;
    this.setState({
      questions: questions.data,
      title: params.questionCollection
    });
  }


render() {
      return (
        <div className="container">
          <div className="row">
            <h1 style={{textTransform: "capitalize"}}>Guns</h1>
            </div>
            <div className="row">
            <h5 style={{textTransform: "capitalize"}}>Assault Rifles</h5>
            </div>
            <div className="row">
            {this.state.questions === null && <p>Loading guns...</p>}
            {
              this.state.questions && this.state.questions.map(question => question.weapon_type === "assault_rifle" ? (
  
                <div key={question.id} className="col-sm-12 col-md-4 col-lg-3">
                  <Link to={{
                    pathname: `/guns/${question.name_of_gun}`,
                    state: {
                      gunID: question.id  
                    }
                  }}>
                  <div className="card text-white bg-success mb-3">
                    <div className="card-body">
                      <h4 className="card-title" style={{textTransform: "capitalize"}}>{question.name_of_gun}</h4>
                    </div>
                  </div>
                  </Link>
              </div>
            
              ) : <div /> )}
          </div>
          <div className="row">
          <h5 style={{textTransform: "capitalize"}}>Assault Carbines</h5>
            </div>
            <div className="row">
            {this.state.questions === null && <p>Loading guns...</p>}
            {
              this.state.questions && this.state.questions.map(question => question.weapon_type === "assault_carbine" ? (
  
                <div key={question.id} className="col-sm-12 col-md-4 col-lg-3">
                  <div className="card text-white bg-success mb-3">
                    <div className="card-body">
                      <h4 className="card-title" style={{textTransform: "capitalize"}}>{question.name_of_gun}</h4>
                    </div>
                  </div>
              </div>
            
              ) : <div /> )}
          </div>
        </div>
      );

  }
  
          }


export default Collection;