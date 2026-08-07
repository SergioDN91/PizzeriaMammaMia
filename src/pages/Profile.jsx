const Profile = () => {
  return (
    <div className="container text-center my-5 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="mb-3">Perfil de Usuario</h2>
        <p className="text-muted fs-5"><strong>Email:</strong> usuario@mammamia.cl</p>
        <button className="btn btn-danger mt-3 px-4">Cerrar Sesión 🚪</button>
      </div>
    </div>
  );
};

export default Profile;