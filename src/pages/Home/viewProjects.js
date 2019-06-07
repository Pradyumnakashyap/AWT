//Company dashboard file

import React from 'react';
import ProjectsTable from '../Tables/ExtendedTables/ProjectsTable';

// const Dashboard = () => (
class viewProjects extends React.Component {

  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="content">
        <div className="container-fluid">

          <div className="row">
            <div >
              <ProjectsTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default viewProjects;