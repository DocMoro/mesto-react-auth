import Footer from "./Footer";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {props.loggedIn ? (
        <>
          <Component {...props} /> 
          <Footer />
        </> 
      ) : (
        <Redirect to="/sign-in" />
      )}
    </Route>
  );
};

export default ProtectedRoute; 