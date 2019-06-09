//Admin dashboard file

import React from "react";
import StudentProjectsTable from "../Tables/ExtendedTables/StudentProjectsTable";
import PostmanHandoverTable from "../Tables/ExtendedTables/PostmanHandoverTable";

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
            <StudentProjectsTable />
          </div>
          <div className="row">
            {/* <PostmanHandoverTable /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
