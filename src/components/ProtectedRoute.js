import Footer from "./Footer";
import Header from "./Header";
import { Route, Redirect, Link } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {props.loggedIn ? (
        <>
          <Header>
            <Link to="/sign-in" className="header__link">Выход</Link>
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