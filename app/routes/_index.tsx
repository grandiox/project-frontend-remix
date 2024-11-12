export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a la Aplicación</h1>
      <p className="mb-8 text-lg">Una plataforma de gestión con autenticación y consulta de usuarios.</p>
      <a
        href="/login"
        className="px-6 py-3 bg-teal-700 hover:bg-teal-600 text-white rounded-lg shadow-md text-lg"
      >
        Iniciar sesión
      </a>
    </div>
  );
}
