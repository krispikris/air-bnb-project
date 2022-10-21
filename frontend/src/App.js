// frontend/src/App.js
import    React, { useState, useEffect }    from "react";
import  { useDispatch }                     from "react-redux";
import  { Route, Switch }                   from "react-router-dom";

import    * as sessionActions               from "../src/store/session";
import    Navigation                        from "../src/components/Navigation";
import    Spots                             from "../src/components/Spots/Spots";
import    SpotDetails                       from "../src/components/Spots/SpotDetails";
import    CreateSpotForm                    from "../src/components/Spots/CreateSpotFormModal/CreateSpotForm";

const App= () => {
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
};

export default App;
