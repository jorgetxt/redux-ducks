import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from 'react-redux'
import { signUpAccion } from '../../redux/signUpDucks';
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  contenedor:{
    backgroundColor: "white",
  },
}));

export default function SignUp() {
  const classes = useStyles();

/*take data from inputs */

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [email, setEmail] = useState("")
const [names, setNames] = useState("")


const sendData=async(e)=>{
  e.preventDefault();
  await dispatch(signUpAccion(username,names, email,password))
  setOpenSnackBar(true)

}
const dispatch = useDispatch()
const logUpData = useSelector(store => store.signUp)

/*snackBar*/
const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleOpenSB=()=>{
    setOpenSnackBar(true)
  }
  const handleCloseSB=()=>{
    setOpenSnackBar(false)
  }

 

  return (
    <Container component="main" maxWidth="xs" className={classes.contenedor}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange = {(e)=> setNames(e.target.value)}
                autoComplete="Names"
                name="Names"
                variant="outlined"
                required
                fullWidth
                id="Names"
                label="Names"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange = {(e)=> setUsername(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="User Name"
                label="User Name"
                name="UserName"
                autoComplete="Uname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onChange = {(e)=> setEmail(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange = {(e)=> setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              
            </Grid>
          </Grid>
          <Button
          onClick= {(e)=> sendData(e)}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSB}
        message= {logUpData.array.msg}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleCloseSB}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSB}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </Container>
  );
}