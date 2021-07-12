import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Form from './form/Form'




const useStyles = makeStyles(() => ({
    container:{
        backgroundColor: "#d3d3d3",
        height: "90vh",
       
    }
    
  }));


function LoginContainer() {
    const classes = useStyles();
    
    return (
        <div>
        <Grid container spacing={0} >
            <Grid item xs={12} className={classes.container} >
                <Form></Form>
            </Grid>
        </Grid>
        </div>
    )
}

export default LoginContainer
