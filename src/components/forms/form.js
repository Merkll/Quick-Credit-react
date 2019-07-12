import React from "react";
import PropTypes from 'prop-types';
import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";

export default class Form extends React.Component {
    state = {
        fields: {}
    }
    static propTypes = {
        fields: PropTypes.arrayOf(PropTypes.object).isRequired,
        header: PropTypes.node,
        footer: PropTypes.node,
        buttonColor: PropTypes.string,
        buttonText: PropTypes.string
    }
    handleFormSubmission = (event) => {
        event.preventDefault();
        if (!this.props.onSubmit) return;
        this.props.onSubmit(this.state.fields);
    }
    onInputChange = event => {
        const { name, value } = event.target;
        const fields = { ...this.state.fields,  [name]: value };
        this.setState({ fields });
    }
    render() {
        const getInputField = ({ label, type = 'text', icon, name, placeHolder }) => <MDBInput label={label} type={type} name={name} icon={icon} key={name} onChange={this.onInputChange} value={this.state.fields[name]} placeholder={placeHolder} />
        const fields = this.props.fields.map(data => getInputField(data));
        return (
            <MDBCard id="classic-card">
            <MDBCardBody className="z-depth-2 white-text">
              <form onSubmit={this.handleFormSubmission} >
                {this.props.header}
                {fields}
                <MDBBtn color={ this.props.buttonColor || "primary" } type="submit">{this.props.buttonText || "Primary"}</MDBBtn>
                {this.props.footer}
              </form>
            </MDBCardBody>
          </MDBCard>
        )
    }
}