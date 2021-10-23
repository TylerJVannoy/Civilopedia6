import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default class EditCivilization extends Component {
  constructor(props) {
    super(props);

    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeCivilization = this.onChangeCivilization.bind(this);
    this.onChangeCivDescription = this.onChangeCivDescription.bind(this);
    this.onChangeLeader = this.onChangeLeader.bind(this);
    this.onChangeLeaderDescription = this.onChangeLeaderDescription.bind(this);
    this.onChangeUnit = this.onChangeUnit.bind(this);
    this.onChangeUnitDescription = this.onChangeUnitDescription.bind(this);
    this.onChangeInfrastructure = this.onChangeInfrastructure.bind(this);
    this.onChangeInfrastructureDescription =
      this.onChangeInfrastructureDescription.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

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
      rating: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://civilopediabackend.herokuapp.com/civilizations/" +
          this.props.match.params.id,
      )
      .then(response => {
        this.setState({
          image: response.data.image,
          civilization: response.data.civilization,
          civdescription: response.data.civdescription,
          leader: response.data.leader,
          leaderdescription: response.data.leaderdescription,
          unit: response.data.unit,
          unitdescription: response.data.unit,
          infrastructure: response.data.infrastructure,
          infrastructuredescription: response.data.infrastructuredescription,
          rating: response.data.rating,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChangeImage(e) {
    this.setState({
      image: e.target.value,
    });
  }
  onChangeCivilization(e) {
    this.setState({
      civilization: e.target.value,
    });
  }
  onChangeCivDescription(e) {
    this.setState({
      civdescription: e.target.value,
    });
  }
  onChangeLeader(e) {
    this.setState({
      leader: e.target.value,
    });
  }
  onChangeLeaderDescription(e) {
    this.setState({
      leaderdescription: e.target.value,
    });
  }
  onChangeUnit(e) {
    this.setState({
      unit: e.target.value,
    });
  }
  onChangeUnitDescription(e) {
    this.setState({
      unitdescription: e.target.value,
    });
  }
  onChangeInfrastructure(e) {
    this.setState({
      infrastructure: e.target.value,
    });
  }
  onChangeInfrastructureDescription(e) {
    this.setState({
      infrastructuredescription: e.target.value,
    });
  }
  onChangeRating(e) {
    this.setState({
      rating: e.target.value,
    });
  }

  //onSubmit logic
  onSubmit(e) {
    e.preventDefault();

    const civ = {
      image: this.state.image,
      civilization: this.state.civilization,
      civdescription: this.state.civdescription,
      leader: this.state.leader,
      leaderdescription: this.state.leaderdescription,
      unit: this.state.unit,
      unitdescription: this.state.unitdescription,
      infrastructure: this.state.infrastructure,
      infrastructuredescription: this.state.infrastructuredescription,
      rating: this.state.rating,
    };

    console.log(civ);

    axios
      .post(
        "https://civilopediabackend.herokuapp.com/civilizations/update/" +
          this.props.match.params.id,
        civ,
      )
      .then(res => console.log(res.data));

    window.location = "/list";
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="box formstyle">
            <div className="field">
              <label className="label">Civilization's Image Link</label>
              <div className="control">
                <input
                  type="text"
                  required
                  className="input"
                  placeholder="Civ's Img"
                  value={this.state.image}
                  onChange={this.onChangeImage}
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label">Civilization's Name</label>
              <div className="control">
                <input
                  type="text"
                  required
                  className="input"
                  placeholder="Civ's Name"
                  value={this.state.civilization}
                  onChange={this.onChangeCivilization}
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label">Civilization's Info</label>
              <div className="control">
                <input
                  type="text"
                  required
                  className="input"
                  placeholder="Civ's Info"
                  value={this.state.civdescription}
                  onChange={this.onChangeCivDescription}
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label">Civilization's Leader</label>
              <div className="control">
                <input
                  type="text"
                  required
                  className="input"
                  placeholder="Civ's Leader"
                  value={this.state.leader}
                  onChange={this.onChangeLeader}
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label">Civilization's Leader Info</label>
              <div className="control">
                <input
                  type="text"
                  required
                  className="input"
                  placeholder="Civ's Leader Info"
                  value={this.state.leaderdescription}
                  onChange={this.onChangeLeaderDescription}
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label">Civilization's Unit</label>
              <div className="control">
                <input
                  type="text"
                  required
                  className="input"
                  placeholder="Civ's Unit"
                  value={this.state.unit}
                  onChange={this.onChangeUnit}
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label">Civilization's Unit Info</label>
              <div className="control">
                <input
                  type="text"
                  required
                  className="input"
                  placeholder="Civ's Unit Info"
                  value={this.state.unitdescription}
                  onChange={this.onChangeUnitDescription}
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label">Civilization's Infrastructure</label>
              <div className="control">
                <input
                  type="text"
                  required
                  className="input"
                  placeholder="Civ's Infrastructure"
                  value={this.state.infrastructure}
                  onChange={this.onChangeInfrastructure}
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label">
                Civilization's Infrastructure Info
              </label>
              <div className="control">
                <input
                  type="text"
                  required
                  className="input"
                  placeholder="Civ's Infrastructure Info"
                  value={this.state.infrastructuredescription}
                  onChange={this.onChangeInfrastructureDescription}
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label">Civilization's Rating</label>
              <div className="control">
                <input
                  type="number"
                  required
                  className="input"
                  placeholder="Civ's Rating"
                  value={this.state.rating}
                  onChange={this.onChangeRating}
                ></input>
              </div>
            </div>
            <div className="buttoncontainer">
              <input
                type="submit"
                value="Submit"
                className="button buttonstyle"
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
