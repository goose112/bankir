import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    if (data.user) {
      // ✅ Создаём профиль
      await supabase.from("profiles").insert([
        {
          id: data.user.id,
          email: email,
          full_name: fullName,
          balance: 50000,
        },
      ]);
    }

    alert("Регистрация успешна ✅");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Регистрация</h2>

      <input
        type="text"
        placeholder="Имя"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Зарегистрироваться</button>
    </div>
  );
};

export default RegisterPage;