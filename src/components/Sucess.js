import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';




export class Sucess extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render(){
        const {values, handleChange} = this.props;
    return (
        <MuiThemeProvider>
            <React.Fragment>
            <AppBar title="Sucess" />
         <h1>Obrigado pela sua inscrição</h1>
         <p>Confira seu E-mail para saber as demais Instruções.</p>
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

export default Sucess
