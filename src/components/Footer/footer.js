import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top-footer">
        <ul className="text-footer">
          <li>
            <a href="/home">Home page</a>
          </li>
          <li>
            <a href="/qurish">Create page</a>
          </li>
          <li>
            <a href="/card">Cards</a>
          </li>
          <li>
            <a href="/register">Registratsia</a>
          </li>
          <li>
            <a href="/">Login page</a>
          </li>
        </ul>
        <ul className="icon-footer">
          <li>
            <i class="fa-brands fa-telegram"></i>
          </li>
          <li>
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i class="fa-brands fa-facebook-f"></i>
          </li>
          <li>
            <i class="fa-solid fa-envelope-open"></i>
          </li>
          <li>
            <i class="fa-brands fa-android"></i>
          </li>
        </ul>
      </div>
      <div className="bottom-footer">
        <p>&copy; 2022 Компания Ishchi. Все права защищены.</p>
      </div>
    </div>
  );
}

export default Footer;
