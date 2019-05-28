import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import newStyle from '../Style.less';
import { TextField, Divider, Button } from '@material-ui/core';
class ForgetPassword extends Component{
render()
{
    return(
        <div>
            <div className={newStyle.forgetcard}>
            <Card className={newStyle.innercard}>
            <div className={newStyle.cardcontent}>
            <div className={newStyle.headers}><h2>Forget Password</h2></div>
                <div className={newStyle.innertext}>
                <TextField 
                    id="standard-name"
                    label="Email"
                    // value={this.props.firstName}
                    // onChange={(event)=>this.handleFirstNameChange(event)}
                    margin="normal"
                />        
            </div>
            </div>
            
            </Card>
            </div>
        </div>
        
       
    )
}}
export default ForgetPassword;