import React from 'react';
import { MDBIcon } from "mdbreact";
import Form from './form';

export default (props) => {
    const fields = [
        {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            placeHolder: 'email@example.com',
            icon: 'envelope'
        },
         {
            name: 'email',
            label: 'Email Address',
            type: 'text',
            placeHolder: 'email@example.com',
            icon: 'envelope'
        },
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          icon: 'lock'   
        }
    ];
    const signupSubmission = (formData) => {
        // signup fetch call here
        console.log(formData);
    }
    const header =  <h3 className="text-center"> <MDBIcon icon="user" /> Register: </h3>;
    return (
        <Form fields={fields} onSubmit={signupSubmission} header={header} />
    );
}