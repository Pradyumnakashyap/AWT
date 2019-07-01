//Admin dashboard file

import React from "react";
import StudentProjectsTable from "../Tables/ExtendedTables/StudentProjectsTable";
import ProjectSignup from "./ProjectSignup";
import ProjectRegister from "../Forms/RegularForms/Register"

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6">
              <ProjectRegister />
            </div>
            <div className="col col-md-6">
              <StudentProjectsTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
