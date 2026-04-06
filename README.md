# AURA — Retouch Website

Сайт-лендінг для ретушера. Яскравий, сучасний дизайн з анімаціями.

## Структура проєкту

```
retoucher-site/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── README.md
```

## Що включено

- **Hero** — заголовок, статистика, CTA кнопки
- **About** — інформація про ретушера, навички, інструменти
- **Portfolio** — сітка робіт з фільтрацією по категоріях
- **Process** — 4 кроки роботи
- **Price** — 3 тарифи (Базова, Стандарт, Преміум)
- **Reviews** — відгуки клієнтів
- **Contacts** — форма + соціальні мережі

## Налаштування

Замініть у `index.html` та `style.css`:
- `@yourusername` → ваш Telegram/Instagram username
- `hello@youremail.com` → ваш email
- Ім'я `Аліна` → ваше ім'я
- Ціни, тексти, описи

## Деплой на GitHub Pages

### 1. Створіть репозиторій на GitHub
Назва: `retoucher-site` або будь-яка інша

### 2. Ініціалізуйте git та залийте код

```bash
git init
git add .
git commit -m "Initial commit: AURA retoucher website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/retoucher-site.git
git push -u origin main
```

### 3. Увімкніть GitHub Pages
1. Перейдіть: `Settings → Pages`
2. Source: `Deploy from a branch`
3. Branch: `main`, папка: `/ (root)`
4. Натисніть **Save**

### 4. Сайт буде доступний за адресою:
```
https://YOUR_USERNAME.github.io/retoucher-site/
```

## Технології

- HTML5 / CSS3 / Vanilla JS
- Google Fonts (Bebas Neue, DM Sans, Space Mono)
- Без залежностей — чиста швидка версія
