import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.required) {
    errors.required = 'Please enter your name';
  }
  if (!values.required1) {
    errors.required1 = 'Please enter your matriculation number'
  }
  return errors;
};

const SignUp = ({
  submitting,
  handleSubmit,
  submitForm
}) => (
  <div className="card">
    <div className="header">
      <h4>Sign up for a project</h4>
    </div>
    <div className="content">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label className="control-label">Full Name</label>
          <Field
            name="required"
            type="text"
            component={renderField} />
        </div>

        <div className="form-group">
          <label className="control-label">Matriculation Number</label>
          <Field
            name="required1"
            type="text"
            component={renderField} />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <Field
            name="email"
            type="email"
            component={renderField} />
        </div>

        

        <button type="submit" className="btn btn-fill btn-info" enabled={submitting}>Submit</button>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'SignUp',
  validate
})(SignUp)