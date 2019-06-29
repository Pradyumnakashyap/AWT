//Admin dashboard file

import React from "react";
import CaetegorTable from "../Tables/ExtendedTables/categoriesTable";
import ProjectRegister from "../Forms/RegularForms/Register"

class Caetegories extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            
              <CaetegorTable />
            
          </div>
        </div>
      </div>
    );
  }
}

export default Caetegories;
