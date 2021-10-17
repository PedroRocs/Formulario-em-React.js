import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import App from '../App';

export class FormPersonalDetails extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render(){
        const {values, handleChange} = this.props;
    return (
        <MuiThemeProvider>
            <React.Fragment>
            <AppBar title="Insira Seus Dados Pessoais" />
            <TextField hintText="Insira Sua Ocupação" 
            floatingLabelText="Insira Sua Ocupação"
            onChange={handleChange('occupation')}
            defaultValue={values.firstNAme} />
            <br/>
            <TextField hintText="Insira sua cidade" 
            floatingLabelText="Cidade"
            onChange={handleChange('city')}
            defaultValue={values.city} />
            <br/>
            <TextField hintText="Bio" 
            floatingLabelText="Fale um pouco sobre você"
            onChange={handleChange('bio')}
            defaultValue={values.bio} />
            <br/>

            <RaisedButton
            label="Volte"
            primary={false}
            style={styles.button}
            onClick={this.back}
            />

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

export default FormPersonalDetails
