import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import "./view.css";

class ViewCivilization extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      civilization: "",
      civdescription: "",
      leader: "",
      leaderdescription: "",
      unit: "",
      unitdescription: "",
      infrastructure: "",
      infrastructuredescription: "",
      rating: 0,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("https://civilopediabackend.herokuapp.com/civilizations/" + id)
      .then(res => {
        this.setState({
          image: res.data.image,
          civilization: res.data.civilization,
          civdescription: res.data.civdescription,
          leader: res.data.leader,
          leaderdescription: res.data.leaderdescription,
          unit: res.data.unit,
          unitdescription: res.data.unitdescription,
          infrastructure: res.data.infrastructure,
          infrastructuredescription: res.data.infrastructuredescription,
          rating: res.data.rating,
        });
        console.log(this.state.image);
      });
  }

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="content is-medium">
                  <figure className="image is-128x128">
                    <img
                      src={`${this.state.image}`}
                      alt=""
                      className="is-rounded"
                    ></img>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="content is-medium civtitle">
                  <h2>{this.state.civilization}</h2>
                  <p>{this.state.civdescription}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="content is-medium civleader">
                  <h2>{this.state.leader}</h2>
                  <p>{this.state.leaderdescription}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="content is-medium civunit">
                  <h2>{this.state.unit}</h2>
                  <p>{this.state.unitdescription}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="content is-medium civinfra">
                  <h2>{this.state.infrastructure}</h2>
                  <p>{this.state.infrastructuredescription}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column"></div>
            </div>
          </div>
        </section>
        <div className="backTag">
          <a href="/list" className="backAnchor">
            Back to List
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewCivilization);
