import React from "react";
import "./registratsiya.css";

function Registratsiya() {
  return (
    <div className="body-forms">
      <div className="forms-register">
        <h1>Регистрация</h1>
        <form className="form-register">
          <div className="name-input">
            <label for="name">Имя и фамилия</label>
            <input type="text" id="name" required />
          </div>
          <div className="email-input">
            <label for="email">Логин или E-mail</label>
            <input type="email" id="email" required />
          </div>
          <div className="password-input">
            <label for="password">Пароль</label>
            <input type="password" id="password" required />
          </div>
          <button type={"button"} className="button">
            Зарегистрироваться
          </button>
          <p className="parol">Забыли пароль?</p>
        </form>
      </div>
    </div>
  );
}

export default Registratsiya;
