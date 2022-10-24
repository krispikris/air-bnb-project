// frontend/src/components/LoginFormModal/LoginForm.js
import    React, { useState }     from 'react';
import  { useDispatch }           from 'react-redux';
import    * as sessionActions     from '../../../store/session';
import                                 './LoginFormModal.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div className='login-modal'>

    <form id="login-form" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
          ))}
      </ul>
      <label id='login-form-title'>LOGIN FORM</label>
      <label id="welcome-back-to-treebnb-login">Welcome back to Treebnb!</label>

      <label id="login-input-title" >Username or Email</label>
        <input id="login-form-inputs"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
          />
      <label id="login-input-title">Password</label>
        <input id="login-form-inputs"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
      <button className='login-submit-button' type="submit">Log In</button>
    </form>
    </div>
  );
}

export default LoginForm;
