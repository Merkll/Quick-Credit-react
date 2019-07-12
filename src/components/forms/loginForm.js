import React from 'react';
import { MDBIcon } from "mdbreact";
import Form from './form';

export default (props) => {
    const fields = [
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
    const loginSubmission = (formData) => {
        // login fetch call here
        console.log(formData);
    }
    const header =  <h3 className="text-center"> <MDBIcon icon="user" /> Login: </h3>;
    return (
        <Form fields={fields} onSubmit={loginSubmission} header={header} />
    );
}