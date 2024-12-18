import { useContext } from "react";
import AuthContext from "../context/authContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-ring loading-lg"></span></div>
    }

    if(user){
        return children;
    }


    return (
        <Navigate to="/signIn" state={location.pathname}></Navigate>
    );
};

export default PrivateRoute;