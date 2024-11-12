import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "icon", href: "/favicon.ico" }
];
export function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Verifica si localStorage está disponible antes de acceder a él
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem('token');
    }
    navigate('/login');
  };

  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans bg-gray-100 text-gray-900 antialiased">
        <header className="bg-teal-600 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-semibold">Mi Aplicación</h1>
            {typeof window !== 'undefined' && window.localStorage.getItem('token') && (
              <button onClick={handleLogout} className="bg-white text-teal-600 px-4 py-2 rounded-md">
                Cerrar sesión
              </button>
            )}
          </div>
        </header>

        <main className="pt-20">
          <div className="container mx-auto px-4">{children}</div>
        </main>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
      <Outlet />
  );
}
