// frontend/src/components/Navigation/index.js
import    React                   from 'react';
import  { NavLink }               from 'react-router-dom';
import  { useSelector }           from 'react-redux';
import    ProfileButton           from './ProfileButton';
import    LoginFormModal          from '../LoginFormModal';
import    SignupFormModal         from '../SignupFormModal';
import    CreateSpotFormModal     from '../CreateSpotFormModal';
import    UpdateSpotFormModal     from '../UpdateSpotFormModal';
import                                 './Navigation.css';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <CreateSpotFormModal />
        <UpdateSpotFormModal />
        <NavLink id="navigation-bar-host-link" to="/newSpot">Become a Host</NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );

  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>

    </ul>
  );
}

export default Navigation;
