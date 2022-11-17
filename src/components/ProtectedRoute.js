import Footer from "./Footer";
import Header from "./Header";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {props.loggedIn ? (
        <>
          <Header>
            {props.children}
          </Header>
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