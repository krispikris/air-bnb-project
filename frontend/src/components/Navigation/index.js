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

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        <CreateSpotFormModal />
        <UpdateSpotFormModal />
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
