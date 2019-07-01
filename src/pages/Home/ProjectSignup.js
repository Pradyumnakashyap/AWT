import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
import TextArea from "components/FormInputs/TextArea"
import SingleSelect from "components/FormInputs/select"
import { Alert } from "react-bootstrap";
import authlib from "../../config/authlib"

    const validate = values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
     
    
      if (!values.name1) {
        errors.name1 = 'Atleast one Student is required';
      }
      if (!values.number1) {
        errors.name1 = 'Atleast one Student is required';
      }
      return errors;
    }
    
    class ProjectSignup extends React.Component {
      constructor(props) {
          super(props)
          this.state = {
              title: '',
              StudentID: '',
              Preference1: '',
              FullName: '',
              Email: '',
              registered:false,
              ProjectOptions: [
                  {key:1, value:"TV Apps"},
                  {key:2, value:"Web Technologies"},
                  {key:3, value:"Artificial intelligence"},
                  {key:4, value:"Multi Screen"},
                  {key:5, value:"Media Technology"},
                  {key:6, value:"Immersive Web"}
              ]
          };
          /*this. handleSubmitLocal = this.handleSubmitLocal.bind(this);*/
      }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(global.backendURL+ "Projects")
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong ...");
                }
            })
            .then(data => {
                
                data.forEach(element => {
                    this.state.ProjectOptions.push(element);
                });
                this.setState({ isLoading: false });
                
            })
            .catch(function (error) {
                console.log(error);
            });
    }

   /* handleSubmitLocal = e => {

        e.preventDefault();
        const options = authlib.getFetchOptions('POST');

        fetch(global.backendURL + "studentproject", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token':options.headers['x-access-token']
            },
            body: JSON.stringify({
                Title: e.target[0].value,
                StudentID: e.target[1].value,
                Preference1: e.target[2].value,
                MaxStudent: e.target[1].value
            })
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            this.setState({registered: true});
        })
        .catch(err => console.log(err));
    }
*/


    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="card">
                <div className="content">
                    <Alert variant="success" className={this.state.registered ? 'visible' : 'hidden'}>
                        Your selection has been completed
                    </Alert>
                    <form onSubmit={this.handleSubmitLocal} className="form-horizontal">

                        <legend>Signup for a Project</legend>
                        <heading> STUDENT 1 </heading>
                        <div className="form-group">
                            <label className="control-label col-md-3">Full Name</label>
                            <div className="col-md-9">
                                <Field
                                    name="name1"
                                    placeholder="First and Last name"
                                    type="text"                     
                                    component={renderField} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-md-3">Matriculation Number</label>
                            <div className="col-md-9">
                                <Field
                                    name="number1"
                                    type="number"
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


                        <div className="form-group">
                            <label className="control-label col-md-3">Preference 1 </label>
                            <div className="col-md-9">

                                <Field
                                    name="category"
                                    placeholder="select category"
                                    options={this.state.ProjectOptions}
                                    value={this.state.projectId}
                                    component={SingleSelect} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-md-3">Preference 2 </label>
                            <div className="col-md-9">

                                <Field
                                    name="category"
                                    placeholder="select category"
                                    options={this.state.ProjectOptions}
                                    value={this.state.projectId}
                                    component={SingleSelect} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-md-3">Preference 3 </label>
                            <div className="col-md-9">

                                <Field
                                    name="category"
                                    placeholder="select category"
                                    options={this.state.ProjectOptions}
                                    value={this.state.projectId}
                                    component={SingleSelect} />
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
    form: 'formElements',
    validate
})(ProjectSignup);