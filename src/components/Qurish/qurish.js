import React from "react";
import "./qurish.css";

function Qurish() {
  return (
    <div className="qurish-body">
      <div className="qurish">
        <h3>Создать учётную запись</h3>
        <form>
          <div className="form">
            <label>Тип работы</label>
            <input type="text" />
          </div>
          <div className="form">
            <label>Название вашей компании</label>
            <input type="text" />
          </div>
          <div className="form">
            <label>Должность</label>
            <input type="text" />
          </div>
          <label className="label">Заглавие</label>
          <input className="input" />
          <label className="label">Подробная информация о работе</label>
          <textarea placeholder="Текст..."></textarea>
        </form>
        <p>Можете дать несколько хороших предложений</p>
        <button>+</button>
        <div className="textare">
          <textarea className="textra" placeholder="Текст..."></textarea>
          <button>x</button>
        </div>
        <div className="qurish-forms">
          <div className="qurish-form">
            <label>Категория</label>
            <input type="text" />
          </div>
          <div className="qurish-form">
            <label>Регион</label>
            <input type="text" />
          </div>
          <div className="qurish-form">
            <label>Адрес</label>
            <input type="text" />
          </div>
          <div className="qurish-form">
            <label>Район</label>
            <input type="text" />
          </div>
          <div className="qurish-form">
            <label>Пол</label>
            <input type="text" />
          </div>
          <div className="qurish-form">
            <label>Телефон</label>
            <input type="text" />
          </div>
          <div className="qurish-form">
            <label>Минимальная зарплата</label>
            <input type="text" />
          </div>
          <div className="qurish-form">
            <label>Максимальная зарплата</label>
            <input type="text" />
          </div>
          <div className="qurish-form">
            <label>Сумма вакансии</label>
            <input type="text" />
          </div>
          <button>Добавить</button>
        </div>
      </div>
    </div>
  );
}

export default Qurish;
