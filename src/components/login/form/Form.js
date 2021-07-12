import { makeStyles, TextField, Button, IconButton, Snackbar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";
import Link from "@material-ui/core/Link";
import SignUp from "../../createUser/SignUp";
import Modal from "@material-ui/core/Modal";
import { useDispatch, useSelector } from "react-redux";
import { obtenerTokenAccion } from "../../../redux/loginDucks";
import { Close as CloseIcon } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  container: {
    margin: "15vh auto",
  },
  form: {
    margin: "10%",
    padding: "5%",
    backgroundColor: "white",
  },
  avatar: {
    margin: "auto",
    width: "10vh",
    height: "10vh",
  },
  buttonLogin: {
    margin: "4vh 0",
  },
  linkCreate: {
    textAlign: "center",
    width: "100%",
  },
}));

function Form() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /* take dataForm */

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /* send form */
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleOpenSB=()=>{
    setOpenSnackBar(true)
  }
  const handleCloseSB=()=>{
    setOpenSnackBar(false)
  }

  const dispatch = useDispatch();
  const loginData = useSelector((store) => store.login);
  const sendData = async () => {
     await dispatch(obtenerTokenAccion(username, password))

     if (window.localStorage.getItem("user") !== null){
        window.location.href = '/home';       
     }else{
        setOpenSnackBar(true)
    }
     
  }
  /*sesion ya inciada*/
  const redireccion =()=>{
    if (window.localStorage.getItem("user") !== null){
      window.location.href = '/home';       
   }
  }

  /* storage */
  useEffect(() => {
    redireccion()
  }, [])

  return (
    <Grid item xs={10} sm={6} md={4} className={classes.container}>
      <form className={classes.form} noValidate autoComplete="off">
        <Avatar className={classes.avatar}></Avatar>
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          label="Username"
          color="secondary"
          fullWidth="true"
          margin="normal"
        />

        <FormControl
          fullWidth="true"
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        >
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button
          onClick={() => sendData()}
          onMouseLeave={() => console.log(window.localStorage.getItem("user"))}
          variant="contained"
          color="primary"
          fullWidth="true"
          className={classes.buttonLogin}
          endIcon={<ExitToAppIcon></ExitToAppIcon>}
        >
          Login
        </Button>

        <Button
          color="primary"
          className={classes.linkCreate}
          onClick={handleOpen}
        >
          Crea una cuenta
        </Button>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <SignUp></SignUp>
      </Modal>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleCloseSB}
        message= {loginData.array.msg}
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
    </Grid>
  );
}

export default Form;
