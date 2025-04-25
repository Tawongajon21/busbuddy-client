import {LOGOUT} from "../constants/logout"
import { baseUrlFrontend } from "../../frontend-url";
export const logout = (role) => (dispatch) => {
    if (role==="developer") {
        localStorage.clear('devInfo');

        dispatch({ type: LOGOUT })
        window.location.href=`${baseUrlFrontend}/developer-signin` 
    }else if (role==="manager") {
        localStorage.clear('managerInfo');
        dispatch({ type: LOGOUT })
        window.location.href=`${baseUrlFrontend}/manager-signin` 
    }else if(role==="admin"){
        localStorage.clear('adminInfo');
        dispatch({ type: LOGOUT })
        window.location.href=`${baseUrlFrontend}/admin-signin`
    }else{
        localStorage.clear('cashierInfo');
        dispatch({ type: LOGOUT })
        window.location.href=`${baseUrlFrontend}/cashier-signin`
    }
 
  }