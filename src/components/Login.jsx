import {connect} from 'react-redux';
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Divider,Button } from '@material-ui/core';
import App from '../App';
import newStyle from '../Style.less';
import { INPUT_EMAIL, INPUT_PASSWORD, LOGIN_USER } from '../constants/actionTypes';
import { toast, ToastContainer } from 'react-toastify';
import Snackbar from '@material-ui/core/Snackbar';


const mapDispatchToProps=dispatch=>({
    inputEmail:(value)=>dispatch({
        type:INPUT_EMAIL,payload:value
    }),
    inputPassword:(value)=>dispatch({
        type:INPUT_PASSWORD,payload:value
    }),
    LoginUser:(data)=>dispatch({
        type:LOGIN_USER,payload:data
    })
})

function mapStateToProps(state){
    console.log('Login Propssss',state.Login)
    return({
        email:state.Login.email,
        password:state.Login.password,
        success:state.Login.success
    })
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            emailError:"",
            passwordError:"",
            flag:false
        }
    }

    handleEmailChange(event){
        var a=event.target.value
        
        if (a.length===0){
            this.setState({
                emailError:"required"
            })}
        else if(a.length>=3  ){
            this.setState({
                emailError:""
            })}
        this.props.inputEmail(event.target.value)
    }
    handlePasswordChange(event){
        var b=event.target.value
        if (b.length===0){
            this.setState({
                passwordError:"required"
            })
        }
        else if(b.length<=7){
            this.setState({
                passwordError:"Minimum 8 characters required"
            })
        }
        else{
            this.setState({
                passwordError:""
            })
        }
        this.props.inputPassword(event.target.value)
    }
    RegisterClick(){
        this.props.history.push('register')
    }
    DashboardClick(){
        if (this.props.email!=="" || this.props.password!=="")
        {
            var data={
                email:this.props.email,
                password:this.props.password
            }   
        this.props.LoginUser(data)
        console.log("ddd=>>",data);
        
    }
        else{
            console.log("Fields are Missing");
            this.setState({
                flag:true
            })
    }}
    
    render() {
        console.log("response"+JSON.stringify(this.props.success))
        var rSuccess=this.props.success
        console.log("My Login Data",rSuccess)
        
        var a=localStorage.getItem('token')
        console.log("My Tokkeen",a);
        
        return (
            <div className={newStyle.loginmaindiv}>
            <div>
                <Card className={newStyle.logincarddiv}>
                <div className={newStyle.innerlogin}>
                    <h2>Fundoo App</h2>
                    <TextField 
                        id="standard-name"
                        label="Email"
                        value={this.props.email}
                        onChange={(event)=>this.handleEmailChange(event)}
                        margin="normal"
                        error={this.state.emailError}
                        helperText={this.state.emailError}
                    />

                    <TextField 
                        id="standard-name"
                        label="Password"
                        value={this.props.password}
                        onChange={(event)=>this.handlePasswordChange(event)}
                        margin="normal"
                        error={this.state.passwordError}
                        helperText={this.state.passwordError}
                    />
                    <div className={newStyle.buttonsview}>
                    <div className={newStyle.buttonview}>
                    <Button variant="contained" color="primary" onClick={()=>this.RegisterClick()}>sign up</Button>

                    <div>
                    <Button variant="contained" color="primary" onClick={()=>this.DashboardClick()}> Login</Button>
                    </div>
                    <div>
                    <Button variant="contained" color="primary"> Forget Password</Button>
                    </div>
                    </div>

                    </div>
                    </div>
                </Card>

                </div>
                <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={this.state.flag}
        // autoHideDuration={1}
        // onClose={handleClose}
        message="Fields are Missing"
        />
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)