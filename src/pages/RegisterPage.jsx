import { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert('Authentication failed: All fields are required!');
      return;
    }

    if (password.length < 6) {
      alert('Authentication failed: Password must be at least 6 characters long!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Authentication failed: Passwords do not match!');
      return;
    }

    alert('Authentication successful!');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center my-5 flex-grow-1">
      <form onSubmit={handleRegister} className="w-100 p-4 border rounded shadow-sm bg-white" style={{ maxWidth: '500px' }}>
        <h2 className="fs-1 fw-bold mb-4 text-center">Register</h2>
        
        <div className="mb-3">
          <label className="form-label fs-5 text-muted">Email</label>
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fs-5 text-muted">Password</label>
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-label fs-5 text-muted">Confirm Password</label>
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-lg w-100">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;