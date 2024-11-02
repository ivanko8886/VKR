// В menu.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.tab-button');
    const searchContent = document.getElementById('searchContent');

    const searchPanels = {
        buy: `
            <div class="search-form">
                <input type="text" placeholder="Город, адрес, метро...">
                <select>
                    <option>Тип недвижимости</option>
                    <option>Квартира</option>
                    <option>Дом</option>
                    <option>Участок</option>
                </select>
                <button class="search-button">Найти</button>
            </div>
        `,
        rent: `
            <div class="search-form">
                <input type="text" placeholder="Город, адрес, метро...">
                <select>
                    <option>Тип аренды</option>
                    <option>Длительная</option>
                    <option>Посуточная</option>
                </select>
                <button class="search-button">Найти</button>
            </div>
        `,
        new: `
            <div class="search-form">
                <input type="text" placeholder="Название ЖК, застройщик...">
                <select>
                    <option>Срок сдачи</option>
                    <option>2024</option>
                    <option>2025</option>
                </select>
                <button class="search-button">Найти</button>
            </div>
        `,
        commercial: `
            <div class="search-form">
                <input type="text" placeholder="Район, улица...">
                <select>
                    <option>Тип помещения</option>
                    <option>Офис</option>
                    <option>Склад</option>
                    <option>Магазин</option>
                </select>
                <button class="search-button">Найти</button>
            </div>
        `
    };

    // Установка начального состояния
    searchContent.innerHTML = searchPanels.buy;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем класс active у всех кнопок
            buttons.forEach(btn => btn.classList.remove('active'));
            // Добавляем класс active текущей кнопке
            this.classList.add('active');
            
            // Обновляем содержимое панели
            const panelType = this.getAttribute('data-panel');
            searchContent.innerHTML = searchPanels[panelType];
        });
    });
});