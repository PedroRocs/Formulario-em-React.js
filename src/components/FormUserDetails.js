import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import App from '../App';

export class FormUserDetails extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render(){
        const {values, handleChange} = this.props;
    return (
        <MuiThemeProvider>
            <React.Fragment>
            <AppBar title="Informe seus dados" />
            <TextField hintText="Primeiro nome" 
            floatingLabelText="Insira Seu Primeiro Nome"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName} />
            <br/>
            <TextField hintText="Ultimo Nome" 
            floatingLabelText="Insira Seu Ultimo Nome "
            onChange={handleChange('lastName')}
            defaultValue={values.lastName} />
            <br/>
            <TextField hintText="Email " 
            floatingLabelText="Insira seu E-mail"
            onChange={handleChange('email')}
            defaultValue={values.email} />
            <br/>

            <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
            />
            </React.Fragment>
           
        </MuiThemeProvider>
       
    );
}
}
const styles = {
    button:{
        margin:15
    }
}

export default FormUserDetails
