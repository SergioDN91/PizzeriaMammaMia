import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [email, setEmail] = useState(() => localStorage.getItem('email') || null);

  
  const login = async (emailInput, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput, password }),
      });
      const data = await response.json();

      if (response.ok && data.token) {
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);
        return { success: true };
      } else {
        return {
          success: false,
          message: data.error || data.message || 'Error al iniciar sesión',
        };
      }
    } catch (error) {
      return { success: false, message: 'Error de conexión con el servidor' };
    }
  };

  
  const register = async (emailInput, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput, password }),
      });
      const data = await response.json();

      if (response.ok && data.token) {
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);
        return { success: true };
      } else {
        return {
          success: false,
          message:
            data.error ||
            data.message ||
            'Error al registrarse. Revisa si el email ya existe o si la contraseña tiene al menos 6 caracteres.',
        };
      }
    } catch (error) {
      return { success: false, message: 'Error de conexión con el servidor' };
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };

  
  const getProfile = async () => {
    if (!token) return;
    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.email) {
        setEmail(data.email);
      }
      return data;
    } catch (error) {
      console.error('Error al obtener perfil:', error);
    }
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);