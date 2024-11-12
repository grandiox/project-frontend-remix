import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config"

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = ("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
      return;
    }
  });
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target );
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      await axios.post(config.apiUrl+"/api/register", { username, password });
      alert("Usuario registrado exitosamente");
    } catch (error) {
      setError(error)
      console.error("Error en el registro", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Registrarse</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Usuario</label>
            <input
              type="text"
              name="username"
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              name="password"
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-lg mt-4 text-lg font-semibold"
          >
            Registrarse
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            ¿Ya tienes cuenta?{" "}
            <a href="/login" className="text-teal-600 hover:text-teal-500">
              Inicia sesión aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}