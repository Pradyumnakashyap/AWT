import React from 'react';
import Tasks from './Tasks';
import TableWithLinks from '../Tables/ExtendedTables/ProjectsTable';
import FormElements from '../Forms/RegularForms/FormElements';
import Register from '../Forms/RegularForms/Register';
import VectorMap from '../MapsPage/VectorMap';
import Intro from './Intro'
import MoreInfo from './MoreInfo'



// const Dashboard = () => (
  class Dashboard extends React.Component{
    constructor(){
      super()
      this.state = {
      }
    }
    
    submit(values){
      console.log(values)

    fetch("http://localhost:8000/persons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullname: "alon",
        email: "alon@tk.com",
        password: "321",
        dateofbirth: "2010-04-30T22:00:00.000Z"
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <Intro /> 
            </div>
            <div className="col-md-6">
              <MoreInfo />
            </div>
          </div>
          <div className="row">
            {/* <div className="col-md-6">
                  <VectorMap />
                </div>
                <div className="col-md-6">
                  <Tasks />
                </div> */}
            {/* <div className="col-md-6">
                  <StackedForm />
                </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
