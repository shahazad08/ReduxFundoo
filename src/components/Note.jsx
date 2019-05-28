import React, { Component } from 'react';
import newStyle from '../Style.less';
import Card from '@material-ui/core/Card';
import { InputBase, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { OPEN_NOTE } from '../constants/actionTypes';
const mapDispatchToProps = dispatch => ({
    handleToggle:() => dispatch({
        type: OPEN_NOTE
    }),
})
function mapStateToProps(state) {
    console.log("State of Open Note",+ state.DisplayPage.openNote)
    return ({
        openNote: state.DisplayPage.openNote
    })
}
class Note extends Component {

    handleToggle() {
        this.props.handleToggle()
        }
    render() {
        console.log("Open Note with Not",+!this.props.openNote)
        console.log("Open Note",+this.props.openNote)
        return (
           
            !this.props.openNote ?
                <div className={newStyle.mainnotediv}>
                    <Card>
                        <div className={newStyle.inputnote}>
                            <InputBase onClick={()=>this.handleToggle()}
                                multiline
                                className='inputbase'
                                placeholder='Take a Note...' />
                        </div>
                        </Card>
                        </div>
                        :
                        <div className={newStyle.mainnotediv}>
               <Card>
                            <div className={newStyle.inputnote}>
                                <InputBase
                                    multiline
                                    className='inputbase'
                                    placeholder='Title' />
                            </div>
                            <div className={newStyle.inputnote}>
                                <InputBase
                                    multiline
                                    className='inputbase'
                                    placeholder='Take a Note...' />
                            </div>
                            {/* <div className={newStyle.outerview}> */}
                            <div className={newStyle.imagesnotes}>
                            <img src={require('../assests/note_collab.svg')} alt="collab" />
                            <img src={require('../assests/note_reminder.svg')} alt="reminder"/>
                            <img src={require('../assests/note_color.svg')} alt="color"/>
                            <img src={require('../assests/note_image.svg')} alt="Image"/>
                            <img src={require('../assests/note_archive.svg')} alt="archive"/>
                            <div className={newStyle.btn}>
                            <Button>Close</Button>
                            </div>

                            </div>
                            {/* </div> */}
                            <div>
                               
                            </div>

                        
                    </Card>
                    </div> 
        )
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Note);