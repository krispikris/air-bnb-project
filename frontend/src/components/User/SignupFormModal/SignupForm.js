// frontend/src/components/SignupForm/index.js
import    React, { useState }             from 'react';
import  { useDispatch, useSelector }      from 'react-redux';
import  { Redirect }                      from 'react-router-dom';
import    * as sessionActions             from '../../../store/session';
import                                         './SignupFormModal.css';

function SignupForm() {
  const   dispatch                              = useDispatch();
  const   sessionUser                           = useSelector((state) => state.session.user);
  const [ firstName, setFirstName ]             = useState("");
  const [ lastName, setLastName ]               = useState("");
  const [ email, setEmail ]                     = useState("");
  const [ username, setUsername ]               = useState("");
  const [ password, setPassword ]               = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ errors, setErrors ]                   = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ firstName, lastName, email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form id="signup-form" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>

      <label id="signup-form-title">SIGN UP FORM</label>
      <label id="welcome-to-treebnb-signup">Welcome to Treebnb!</label>

      <label id="signup-input-title">First Name</label>
        <input id="signup-form-inputs"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

      <label id="signup-input-title">Last Name</label>
        <input id="signup-form-inputs"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

      <label id="signup-input-title">Email</label>
        <input id="signup-form-inputs"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

      <label id="signup-input-title">Username</label>
        <input id="signup-form-inputs"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

      <label id="signup-input-title">Password</label>
        <input id="signup-form-inputs"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />

      <label id="signup-input-title">Confirm Password</label>
        <input id="signup-form-inputs"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <div></div>
      <button className="signup-submit-button" type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
