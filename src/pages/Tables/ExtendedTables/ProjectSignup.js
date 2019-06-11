import React, { Component } from "react";
import generateData from "../generateData";
import { Link, Redirect } from "react-router-dom";

class ProjectSignup extends Component {
  constructor() {
    super();
    this.state = {
      package: {},
      items: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:8000/packagesdetails")
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => {
        console.log(data);
        data.forEach(elemnt => {
          this.state.items.push(elemnt);
        });
        this.setState({ isLoading: false });
        console.log(this.state.items);
        console.log(this.state.items.length);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  deleteItem = itemId => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
  };

  render() {
    // let { items, isShowingAlert } = this.state;
    return (
      <div className="card">
        <div className="header">
          <h4 className="title">Add New Project</h4>
        </div>
        <div className="content table-responsive table-full-width">
          
        </div>
      </div>
    );
  }
}

export default ProjectSignup;
