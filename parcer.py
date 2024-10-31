from bs4 import BeautifulSoup
import requests

# URL страницы, которую мы хотим парсить
url = 'https://kaluga.cian.ru/snyat-komnatu/'

# Получаем содержимое страницы
res = requests.get(url)

# Создаем объект BeautifulSoup для парсинга HTML
soup = BeautifulSoup(res.text, "lxml")

# Находим все элементы с заданным классом с помощью CSS-селекторов
data = soup.select("._93444fe79c--content--lXy9G")

# Выводим каждый найденный элемент
for item in data:
    print(item.text)