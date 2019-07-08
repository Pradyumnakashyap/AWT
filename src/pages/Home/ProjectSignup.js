import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
import TextArea from "components/FormInputs/TextArea"
import SingleSelect from "components/FormInputs/select"
import { Alert } from "react-bootstrap";
import authLib from "../../config/authlib"

const fetchOption = authLib.getFetchOptions();

const required= (value) => {
    if (!value || value === "" || value==="select..."){
        return "Atleast one student is required ! "
    }
    else{
        return undefined 
    }
}

    class ProjectSignup extends React.Component {
      constructor(props) {
          super(props)
          this.state = {
              registered:false,
              ProjectOptions: []
          };
          this. handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(global.backendURL+ "Projects", fetchOption)
        .then(res => res.json())
        .then(
            (data) => {
            data.forEach(Projects => {
                this.state.ProjectOptions.push({ name: Projects.Name, value: Projects.Id })
            })
        })                          
          .catch(function(error){
              console.log(error)
    });   
  }

    handleSubmit(values) {
        values.preventDefault(); 
        const elements = [
            {
                "studentid":1,
                "projectid":1,
                "preference":1
            },
                {
                "studentid":1,
                "projectid":2,
                "preference":2
            },
            {
                "studentid":1,
                "projectid":3,
                "preference":3
            }
        ]

        var postdata = [];

        var projectObj = {
            studentid:1,
            projectId:1,
            preference:1
        }
        postdata.push(projectObj);


        console.log(values)
    
        fetch("http://localhost:8000/studentproject", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': fetchOption.headers['x-access-token']
          },
          body: JSON.stringify({
            
            "studentid": values.target[1].value,
            "projectid": values.target[10].value,
            "preference": 1,
          })
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
          fetch("http://localhost:8000/students", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': fetchOption.headers['x-access-token']
          },
          body: JSON.stringify({
            
            "studentid": values.target[1].value,
            "name": values.target[0].value,
            "email": values.target[2].value,
          })
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            this.setState({ registered: true });
          })
      }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="card">
                <div className="content">
                    <Alert variant="success" className={this.state.registered ? 'visible' : 'hidden'}>
                        Your selection has been completed
                    </Alert>
                    <form onSubmit={this.handleSubmit} className="form-horizontal">

                        <legend>Signup for a Project</legend>
                        <heading> STUDENT 1 </heading>
                        <div className="form-group">
                            <label className="control-label col-md-3">Full Name</label>
                            <div className="col-md-9">
                                <Field
                                    name="name1"
                                    placeholder="First and Last name"
                                    type="text"    
                                    validate = {required}                  
                                    component={renderField} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-md-3">Matriculation Number</label>
                            <div className="col-md-9">
                                <Field
                                    name="number1"
                                    type="number"
                                    validate = {required} 
                                    placeholder="six digits"                                  
                                    component={renderField} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-md-3">Email</label>
                            <div className="col-md-9">
                                <Field
                                    name="email"
                                    type="email"
                                    validate = {required} 
                                    placeholder="Please enter your email"                                    
                                    component={renderField} />
                            </div>
                        </div>

                        <heading> STUDENT 2 </heading>

                        <div className="form-group">
                            <label className="control-label col-md-3">Full Name</label>
                            <div className="col-md-9">
                                <Field
                                    name="name2"
                                    placeholder="First and Last name"
                                    type="text"                                    
                                    component={renderField} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-md-3">Matriculation Number</label>
                            <div className="col-md-9">
                                <Field
                                    name="number2"
                                    type="number"
                                    placeholder="six digits"                                    
                                    component={renderField} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-md-3">Email</label>
                            <div className="col-md-9">
                                <Field
                                    name="email1"
                                    type="email"
                                    placeholder="Please enter your email"                                    
                                    component={renderField} />
                            </div>
                        </div>

                        <heading> STUDENT 3 </heading>
                        <div className="form-group">
                            <label className="control-label col-md-3">Full Name</label>
                            <div className="col-md-9">
                                <Field
                                    name="name3"
                                    placeholder="First and Last name"
                                    type="text"                                    
                                    component={renderField} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-md-3">Matriculation Number</label>
                            <div className="col-md-9">
                                <Field
                                    name="number3"
                                    type="number"
                                    placeholder="six digits"                                    
                                    component={renderField} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-md-3">Email</label>
                            <div className="col-md-9">
                                <Field
                                    name="email2"
                                    type="email"
                                    placeholder="Please enter your email"                                    
                                    component={renderField} />
                            </div>
                        </div>


                        <legend>Preference1</legend>

                            <div>
                                <div>
                                <select  
                                    // value={this.props.chosenProject.Title}
                                    onChange={this.props.handleChange}
                                    name="chosenProject"
                                    class="required"

                                > 
                                    <option selected="selected">select...</option>
                                    {this.state.ProjectOptions.map((Projects) => <option key={Projects.Name} value={Projects.Id}>{Projects.Name}</option>)}
                                </select>
                            </div>
                        </div>

                        <legend>Preference2</legend>

                            <div>
                              <div>
                              <select  
                                // value={this.props.chosenProject.Title}
                                onChange={this.props.handleChange}
                                name="chosenProject"
                                class="required"

                                > 
                                    <option selected="selected">select...</option>
                                    {this.state.ProjectOptions.map((Projects) => <option key={Projects.Name} value={Projects.Id}>{Projects.Name}</option>)}
                                    </select>
                                </div>
                            </div>

                            <legend>Preference3</legend>

                            <div>
                            <div>
                            <select  
                                // value={this.props.chosenProject.Title}
                                onChange={this.props.handleChange}
                                name="chosenProject"
                                class="required"

                                > 
                                    <option selected="selected">select...</option>
                                    {this.state.ProjectOptions.map((Projects) => <option key={Projects.Name} value={Projects.Id}>{Projects.Name}</option>)}
                                    </select>
                                </div>
                            </div>



                        <button type="submit" className="btn btn-fill btn-info right">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'formElements'
})(ProjectSignup);