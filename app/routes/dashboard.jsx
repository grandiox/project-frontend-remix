import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config"

export default function Dashboard() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get(config.apiUrl+"/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUsers(response.data))
      .catch(() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6">Usuarios Registrados</h1>
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <h2 className="text-xl font-medium">{user.username}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
