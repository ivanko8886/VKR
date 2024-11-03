document.addEventListener('DOMContentLoaded', function() {
    // Скрываем все выпадающие меню при загрузке
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
    });

    const panelBtns = document.querySelectorAll('.panel-btn');
    const propertyTypeBtn = document.getElementById('property-type-btn');
    const buyTypeDropdown = document.getElementById('buy-type-dropdown');
    const rentTypeDropdown = document.getElementById('rent-type-dropdown');
    const roomsBtn = document.getElementById('rooms-btn');
    const roomsDropdown = document.getElementById('rooms-dropdown');
    const priceBtn = document.getElementById('price-btn');
    const priceDropdown = document.getElementById('price-dropdown');

    // Устанавливаем начальный текст для кнопки (так как изначально активна вкладка "Купить")
    propertyTypeBtn.textContent = 'Квартиру в новостройке и вторичке';

    panelBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            panelBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            closeAllDropdowns();

            // Меняем текст кнопки в зависимости от выбранной вкладки
            const tabType = this.getAttribute('data-tab');
            if (tabType === 'buy') {
                propertyTypeBtn.textContent = 'Квартиру в новостройке и вторичке';
            } else if (tabType === 'rent') {
                propertyTypeBtn.textContent = 'Квартиру';
            }
        });
    });

    function toggleDropdown(dropdown) {
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            closeAllDropdowns();
            dropdown.style.display = 'block';
        }
    }

    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }

    propertyTypeBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        const activeTab = document.querySelector('.panel-btn.active').getAttribute('data-tab');
        
        if (activeTab === 'buy') {
            toggleDropdown(buyTypeDropdown);
        } else if (activeTab === 'rent') {
            toggleDropdown(rentTypeDropdown);
        }
    });

    roomsBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleDropdown(roomsDropdown);
    });

    priceBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleDropdown(priceDropdown);
    });

    // Закрытие выпадающих меню при клике вне их области
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.option-btn') && !event.target.closest('.dropdown-content')) {
            closeAllDropdowns();
        }
    });
});