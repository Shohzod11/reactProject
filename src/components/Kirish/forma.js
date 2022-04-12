import React from "react";
import "./forma.css";

function Forma() {
  return (
    <div className="form-body">
      <div className="forms">
        <h1>Вход в систему</h1>
        <form className="formalar">
          <div className="email-input">
            <label for="email">Логин или E-mail</label>
            <input type="email" id="email" required />
          </div>
          <div className="password-input">
            <label for="password">Пароль</label>
            <input type="password" id="password" required />
          </div>
          <div className="checkbox">
            <input type={"checkbox"} />
            <p>Запомнить меня</p>
          </div>
          <button type="submit">Войти</button>
          <button type={"button"} className="button2">
            Регистрация
          </button>
          <a href="/register" className="parol">Забыли пароль?</a>
        </form>
      </div>
    </div>
  );
}

export default Forma;
