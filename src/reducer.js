import { combineReducers } from "redux";
import Login from '../src/reducers/Login';
import Register from '../src/reducers/Register';
import DisplayPage from '../src/reducers/DisplayPage';
export default combineReducers({
Login,
Register,
DisplayPage
})