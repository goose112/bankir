import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TransferPage = () => {
  const navigate = useNavigate();

  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();

    if (!recipient || !amount) {
      alert("Заполните все поля");
      return;
    }

    if (Number(amount) <= 0) {
      alert("Сумма должна быть больше 0");
      return;
    }

    alert(`✅ Перевод ${amount}$ пользователю ${recipient} выполнен`);

    // Очистка формы
    setRecipient("");
    setAmount("");

    // Возвращаемся на главную
    navigate("/");
  };

  return (
    <div className="transfer">
      <form className="transfer-card" onSubmit={handleTransfer}>
        <h2>Перевод средств</h2>

        <input
          type="text"
          placeholder="Получатель"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />

        <input
          type="number"
          placeholder="Сумма"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Отправить</button>

        <button
          type="button"
          className="secondary-btn"
          onClick={() => navigate("/")}
        >
          Назад
        </button>
      </form>
    </div>
  );
};

export default TransferPage;