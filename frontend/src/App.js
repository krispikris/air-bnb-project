// frontend/src/App.js
import    React, { useState, useEffect }    from "react";
import  { useDispatch }                     from "react-redux";
import  { Route, Switch }                   from "react-router-dom";

import    * as sessionActions               from "../src/store/session";
import    Navigation                        from "../src/components/Navigation";
import    GetSpots                          from "../src/components/Spots/GetSpots";
import    SpotDetails                       from "../src/components/Spots/SpotDetails";
import    CreateSpotForm                    from "../src/components/Spots/CreateSpotFormModal/CreateSpotForm";
import    CreateReviewForm                  from "./components/Reviews/CreateReviewFormModal/CreateReviewForm";
import    UpdateReviewForm                  from "./components/Reviews/UpdateReviewFormModal/UpdateReviewForm";
import    DeleteReview                      from "./components/Reviews/DeleteReviewModal/DeleteReview";

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
            <GetSpots />
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
