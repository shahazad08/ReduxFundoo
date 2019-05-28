import React,{Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import { MenuItem , MuiThemeProvider,createMuiTheme} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
function mapStateToProps(state){
    console.log("Maps to Open State",+state.DisplayPage.open)
    return({
        open:state.DisplayPage.open
        
    })
    // console.log("Map... ",+state.DisplayPage.OPEN)

}
const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorLeft: {
                top: 70,
                width: 240,
            },
        },
    }
})
class Sidebar extends Component{
    render(){
        return(
            <MuiThemeProvider theme={theme}>
            <Drawer
                variant="persistent"
                open={this.props.open}
                width={250}
            >
              <MenuItem id="noteMenu">
                    Notes
                </MenuItem>
                <MenuItem id="noteReminder">
                    Reminder
                </MenuItem>

                <Divider/>
                
                <MenuItem id="labelMenu">
                    EditLabels
                </MenuItem>
                <MenuItem id="archiveMenu">
                    Archive
                </MenuItem>
                <MenuItem id="trashMenu">
                    Bin
                </MenuItem>
                </Drawer>
                </MuiThemeProvider>
        );
    }
}
export default connect(mapStateToProps,null)(Sidebar)