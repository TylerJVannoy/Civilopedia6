import React, { Component } from "react";
import "./list.css";

import axios from "axios";

const Civ = props => {
  return (
    <tr>
      <td>
        <img
          src={`${props.civilization.image}`}
          alt=""
          className="image is-48x48"
        ></img>
      </td>
      <td className="civshow">{props.civilization.civilization}</td>
      <td className="leadershow">{props.civilization.leader}</td>
      <td className="controllerstyle">
        <a href={"/view/" + props.civilization._id}>View</a>
        <span className="spanstyle"> |</span>
        <a href={"/edit/" + props.civilization._id}> Edit</a>
        <span className="spanstyle"> |</span>
        <a
          className="btn btn-danger"
          onClick={() => {
            props.deleteCiv(props.civilization._id);
          }}
        >
          {" "}
          Delete
        </a>
      </td>
    </tr>
  );
};

export default class CivilizationList extends Component {
  constructor(props) {
    super(props);

    this.deleteCiv = this.deleteCiv.bind(this);

    this.state = { civilizations: [] };
  }

  componentDidMount() {
    axios
      .get("https://civilopediabackend.herokuapp.com/civilizations/")
      .then(response => {
        this.setState({ civilizations: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteCiv(id) {
    axios
      .delete("https://civilopediabackend.herokuapp.com/civilizations/" + id)
      .then(res => console.log(res.data));
    this.setState({
      civilizations: this.state.civilizations.filter(el => el._id !== id),
    });
  }

  civilizationList() {
    return this.state.civilizations.map(currentcivilization => {
      return (
        <Civ
          civilization={currentcivilization}
          key={currentcivilization._id}
          deleteCiv={this.deleteCiv}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="columns ">
              <div className="column ">
                <div className="content ">
                  <table className="table maincontent">
                    <thead>
                      <tr>
                        <th className="has-text-white">Country Flag</th>
                        <th className="civshow has-text-white">Civilization</th>
                        <th className="leadershow has-text-white">Leader</th>
                        <th className="controls has-text-white">Controls</th>
                      </tr>
                    </thead>
                    <tbody>{this.civilizationList()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
