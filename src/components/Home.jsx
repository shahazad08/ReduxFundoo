import React,{Component} from 'react'
import Dashboard from '../components/Dashboard';
import Note from '../components/Note';
import newStyle from '../Style.less';
class Home extends Component{
    render(){
        // if(localStorage.getItem('token1') !== "true"){
        //     return(
        //       window.location.href = '/home'
        //     )
        //   }
        //   else{
        return(
            <div>
                <Dashboard/>
                <div className={newStyle.mainNote}>
                <Note/>
                </div>
                
            </div>
        )
    }
}
// }
export default Home;