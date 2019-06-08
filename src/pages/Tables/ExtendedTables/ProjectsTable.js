import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class ProjectsTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      isLoading: false,
      error: null,
      categoryId : this.props.categoryId
    }
  }


  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(global.backendURL + "projects/category/"+this.props.categoryId)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        else {
          throw new Error('Something went wrong ...');
        }
      })
      .then((data) => {
        data.forEach(elemnt => {
          this.state.projects.push(elemnt)
        });
        this.setState({ isLoading: false });
      })
      .catch(function (error) {
        console.log(error)
      })
  }


  deleteItem = itemId => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
  }

  render() {
    return (
      <div className="card">
        <div className="header">
          <h4 className="title">Projects</h4>
        </div>
        <div className="content table-responsive table-full-width">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>                
                <th>Pre-req</th>    
                <th>Max Students</th>            
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.projects.map(item => (
                <tr key={item.ProjectId} >
                  <td><Link to={`/projects/${item.ProjectId}`} style={{ color: 'blue' }}>                    
                    {item.ProjectId}
                  </Link>
                  </td>
                  <td>{item.Title}</td>                  
                  <td>{item.Prereq}</td>
                  <td>{item.MaxStudent}</td>
                  
                  <td className="text-middle">
                    <Link to={`/package/${item.ProjectId}`}>
                      <div className="btn btn-info" >info</div>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    )
  }
}

export default ProjectsTable;