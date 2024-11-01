// Добавьте этот JavaScript в отдельный файл menu.js и подключите его перед закрывающим тегом body
document.addEventListener('DOMContentLoaded', function() {
    const menuButtons = document.querySelectorAll('.menu-btn');
    const subPanels = document.querySelectorAll('.sub-panel');

    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPanel = document.getElementById(this.dataset.target);
            
            // Скрываем все панели
            subPanels.forEach(panel => {
                panel.style.display = 'none';
            });
            
            // Показываем целевую панель
            targetPanel.style.display = 'block';
        });
    });
});