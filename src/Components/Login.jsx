import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Validaciones
    if (!email || !password) {
      setMessage("Todos los campos son obligatorios.");
      setIsSuccess(false);
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setMessage("El formato del email no es válido.");
      setIsSuccess(false);
      return;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      setIsSuccess(false);
      return;
    }

    // Login exitoso
    setMessage("¡Inicio de sesión exitoso!");
    setIsSuccess(true);

    // Limpia el formulario
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2 className="text-center mb-4">Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Iniciar Sesión
        </button>
      </form>
      {message && (
        <p
          className={`text-center mt-3 ${
            isSuccess ? "text-success" : "text-danger"
          }`}
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Login;

