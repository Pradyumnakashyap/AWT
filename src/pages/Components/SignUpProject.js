  
  import React from 'react';
  import { Route } from 'react-router-dom';
  import Component from '../Components';
 

  
  class SignUp extends Component {
    state = {
      ProjectId: [],
      Title: "",
      validationError: ""
    }
  
    componentDidMount() {
      fetch(global.backendURL+"Projects")
        .then((response) => {
          return response.json();
        })
        .then(data => {
          let ProjectIdFromApi = data.map(Project => { return {value: Project.ProjectId  , display: Project.Title} })
          this.setState({ ProjectId: [{value: '', display: '(Select your Preferred project)'}].concat(ProjectIdFromApi) });
        }).catch(error => {
          console.log(error);
        });
    }
  
    render() {
      return (
        <div>
          <select value={this.state.Title} 
                  onChange={(e) => this.setState({Title: e.target.value, validationError: e.target.value === "" ? "You must select a preferred Project" : ""})}>
            {this.state.ProjectId.map((Project) => <option key={Project.value} value={Project.value}>{Project.display}</option>)}
          </select>
          <div style={{color: 'red', marginTop: '5px'}}>
            {this.state.validationError}
          </div>
        </div>
      )
    }
  }

  export default SignUp;