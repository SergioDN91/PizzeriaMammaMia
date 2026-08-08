import { useEffect } from 'react';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const { email, logout, getProfile } = useUser();

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="container my-5 text-center">
      <div className="card p-4 mx-auto shadow" style={{ maxWidth: '400px' }}>
        <h2 className="fw-bold mb-3">Perfil de Usuario</h2>
        <p className="fs-5 mb-4">Email: <strong>{email || 'Cargando...'}</strong></p>
        <button className="btn btn-danger" onClick={logout}>
          Cerrar Sesión 🔒
        </button>
      </div>
    </div>
  );
};

export default Profile;