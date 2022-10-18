// frontend/src/App.js
import    React, { useState, useEffect }    from "react";
import  { useDispatch }                     from "react-redux";
import  { Route, Switch }                   from "react-router-dom";
import    * as sessionActions               from "./store/session";
import    Navigation                        from "./components/Navigation";
import    Spots                             from "./components/Spots/Spots"
import CreateSpot from "./components/CreateSpot/CreateSpot";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/'>
            <Spots />
          </Route>
          <Route path='/newSpot'>
            <CreateSpot />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
