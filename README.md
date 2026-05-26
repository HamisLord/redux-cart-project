# Redux Cart Project

Проект для КТ по теме Redux.

## Что реализовано

- Список товаров из `defaultState`.
- Изменение `count` через кнопки `+` и `-`.
- Ограничение `count` от 1 до 25.
- При уменьшении товара до `0` элемент удаляется из корзины.
- Добавление нового товара через `prompt()`.
- Новый товар получает `count: 1`, а `id` создаётся через `Date.now()`.
- Управление состоянием выполнено через Redux.
- Подготовлена публикация на GitHub Pages.

## Установка

```bash
npm install
```

## Запуск

```bash
npm run dev
```

## Публикация на GitHub Pages

1. Создайте репозиторий на GitHub, например `redux-cart-project`.
2. В `package.json` замените строку:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/redux-cart-project"
```

на свой адрес, например:

```json
"homepage": "https://mukhammad.github.io/redux-cart-project"
```

3. Выполните:

```bash
npm run deploy
```
