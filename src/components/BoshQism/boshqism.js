import React from 'react';
import "./boshqism.css";
import star from "../../img/star.png";

function Boshqism() {
  return (
    <>
        <nav className='nav-box'>
            <select>
                <option>Дата публикации</option>
            </select>
            <select>
                <option>Уровень заработной платы</option>
            </select>
            <select>
                <option>График работы</option>
            </select>
            <select>
                <option>Тип занятости</option>
            </select>
            <select>
                <option>Опыт работы</option>
            </select>
        </nav>
        <div className='asosiy'>
            <div className='box'>
                <div className='box-btn'>
                    <button>Весь список</button>
                    <button>Cовпадения</button>
                    <button>Рекомендуемое</button>
                </div>
                <div className='box-cards'>
                    <div className='box-card'>
                        <h3>UX/UI, Веб дизайнер</h3>
                        <h4>от 4 000 000</h4>
                        <button>Можно работать удалённо</button>
                        <h5>IT-Company</h5>
                        <p>Создание дизайна для веб и мобильных приложений. Внесение предложений по улучшению/оптимизации дизайна проектов. Взаимодействие с командой ...</p>
                        <h5><i class="fa-solid fa-location-dot"></i>Ташкент, Узбекистан</h5>
                        <p>28.03.2022</p>
                        <div className='position'>
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <p><i class="fa-solid fa-eye"></i>Просмотрено: 84</p>
                        </div>
                    </div>
                    <div className='box-card'>
                        <h3>UX/UI, Веб дизайнер</h3>
                        <h4>от 4 000 000</h4>
                        <button>Можно работать удалённо</button>
                        <h5>IT-Company</h5>
                        <p>Создание дизайна для веб и мобильных приложений. Внесение предложений по улучшению/оптимизации дизайна проектов. Взаимодействие с командой ...</p>
                        <h5><i class="fa-solid fa-location-dot"></i>Ташкент, Узбекистан</h5>
                        <p>28.03.2022</p>
                        <div className='position'>
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <p><i class="fa-solid fa-eye"></i>Просмотрено: 84</p>
                        </div>
                    </div>
                    <div className='box-card'>
                        <h3>UX/UI, Веб дизайнер</h3>
                        <h4>от 4 000 000</h4>
                        <button>Можно работать удалённо</button>
                        <h5>IT-Company</h5>
                        <p>Создание дизайна для веб и мобильных приложений. Внесение предложений по улучшению/оптимизации дизайна проектов. Взаимодействие с командой ...</p>
                        <h5><i class="fa-solid fa-location-dot"></i>Ташкент, Узбекистан</h5>
                        <p>28.03.2022</p>
                        <div className='position'>
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <p><i class="fa-solid fa-eye"></i>Просмотрено: 84</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box1'>
                <div className='box2-card'>
                        <h3>UX/UI, Веб дизайнер</h3>
                        <h4>от 6 000 000 до 10 000 000 сум</h4>
                        <button>Можно работать удалённо</button>
                        <h5>IT-Company</h5>
                        <h5><i class="fa-solid fa-location-dot"></i>Ташкент, улица Ойбек, 21</h5>
                        <div className='position'>
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <p><i class="fa-solid fa-eye"></i>Просмотрено: 84</p>
                        </div>
                </div>
                <h4>Сведения о компании</h4>
                <p>Проект Компания “Raqamli Dunyo” ищет UI / UX Дизайнера с творческим и прикладным мышлением, ориентированного на детали; кто готов бросить вызов самому себе в процессе предоставления новых решений для автоматизации индустриальных глобальный продуктов. Raqamli Dunyo - широкомасштабная стартап экосистема в секторах розничной торговли, рекрутинга, образовании и корпоративной автоматизации с 4 интересными большими субпродуктами.</p>
                <h4>Обязанности:</h4>
                <ul>
                    <li>Разработка, проектирование и дизайн интерфейсов, интерфейсов и элементов сайта, мобильного приложения, баннеров соблюдая единообразия UI на разных платформах;
                    </li>
                    <li>Участие на этапе формирования технического задания, анализ и формализация бизнес-требований;
                    </li>
                    <li>Прототипирование, проектирование интерфейсов, сайтов, в соответствие с бизнес-задачами;
                    </li>
                </ul>
                <h4>Требования:</h4>
                <ul>
                    <li>Отличное знание CorelDraw/Adobe PhotoShop/Adobe Illustrator, Figma c опытом разработки от 2 лет;
                    </li>
                    <li>Портфолио: минимум 3 успешных и активных проектов по автоматизацию/маркетплейсов;
                    </li>
                    <li>Знание гайдлайнов Human Interface Guidelines, Material Design, Adaptive design и понимание когда стоит от них отступать;
                    </li>
                </ul>
                <h4>Обязанности:</h4>
                <ul>
                    <li>Разработка, проектирование и дизайн интерфейсов, интерфейсов и элементов сайта, мобильного приложения, баннеров соблюдая единообразия UI на разных платформах;
                    </li>
                    <li>Участие на этапе формирования технического задания, анализ и формализация бизнес-требований;
                    </li>
                    <li>Прототипирование, проектирование интерфейсов, сайтов, в соответствие с бизнес-задачами;
                    </li>
                </ul>
                <h4>Ключевые навыки:</h4>
                <button>Figma</button>
                <button>UX/UI</button>
                <button>Adobe Photoshop</button>
                <button className='color-btn'>Откликнуться</button>
            </div>
            <div className='box3'>
                <div className='box3-color'>
                    <h1>Реклама</h1>
                </div>
                <div className='box3-color'>
                    <h1>Реклама</h1>
                </div>
            </div>
        </div>
    </>
  );
}

export default Boshqism;