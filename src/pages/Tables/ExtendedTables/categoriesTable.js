import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class CategoriesTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      isLoading: false,
      error: null,
      categoryId: this.props.categoryId
    }
  }


  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(global.backendURL + "category",)
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
          this.state.categories.push(elemnt)
        });
        this.setState({ isLoading: false });
      })
      .catch(function (error) {
        console.log(error)
      })
  }


  deleteItem = id => {
    debugger;
    this.setState({
      categories: this.state.categories.filter(item => item.categoryId !== id)
    });
  }

  render() {
    return (
      <div className="card">
        <div className="header">
          <h4 className="title">Categories</h4>
        </div>
        <div className="content table-responsive table-full-width">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.categories.map(item => (
                <tr key={item.categoryId} >
                  <td><Link to={`/projects/${item.categoryId}`} style={{ color: 'blue' }}>
                    {item.categoryId}
                  </Link>
                  </td>
                  <td>{item.ShortName}</td>
                  <td>{item.LongName}</td>
                  

                  <td className="text-middle">
                  
                    <button type="button" className="btn btn-wide btn-warning" onClick={() => this.deleteItem(item.categoryId)}  >
                      <span className="btn-label">
                        <i className="fa fa-warning"></i>
                      </span> Delete
                  </button>

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

export default CategoriesTable;