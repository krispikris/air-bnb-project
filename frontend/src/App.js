// frontend/src/App.js
import    React, { useState, useEffect }    from "react";
import  { useDispatch }                     from "react-redux";
import  { Route, Switch }                   from "react-router-dom";
import    * as sessionActions               from "./store/session";
import    Navigation                        from "./components/Navigation";
import    Spots                             from "./components/Spots"
import    CreateSpotForm                    from "./components/CreateSpotFormModal/CreateSpotForm";
import    SpotDetails                       from "./components/SpotDetails";

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
          <Route exact path='/'>
            <Spots />
          </Route>
          <Route path='/newSpot'>
            <CreateSpotForm />
          </Route>
          <Route path='/spots/:spotId'>
            <SpotDetails />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
