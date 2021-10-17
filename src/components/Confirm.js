import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'
import App from '../App';


export class Confirm extends Component {
    
    continue = e => {
        e.preventDefault();
        // PROCESSO DO FORMULARIO
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render(){
        const {values: {firstName,lastName,email,occupation,city,bio}} = this.props;
    return (
        <MuiThemeProvider>
            <React.Fragment>
            <AppBar title="Confira o seus dados" />
         
            <List>
            <ListItem
            primaryText="PRIMEIRO NOME"
            secondaryText={firstName}
            />

            <ListItem
            primaryText="ULTIMO NOME"
            secondaryText={lastName}
            />

            <ListItem
            primaryText="E-mail"
            secondaryText={email}
            />

            <ListItem
            primaryText="OCUPAÇÃO"
            secondaryText={occupation}
            />

            <ListItem
            primaryText="CIDADE"
            secondaryText={city}
            />

            <ListItem
            primaryText="BIO"
            secondaryText={bio}
            />
        </List>
            <RaisedButton
            label="Confirme & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
            />

<RaisedButton
               label="Volte"
               primary={false}
               style={styles.button}
               onClick={this.back}
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

export default Confirm
