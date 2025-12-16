export const localQuestionsByTopic = {
  ai: [
    {
      id: "ai-1",
      category: "AI",
      question: "Що таке машинне навчання (ML)?",
      correct: "Підхід, де модель навчається на даних, щоб робити прогноз/рішення",
      incorrect: [
        "Алгоритм, що працює тільки без даних",
        "Жорстко прописані правила без навчання",
        "Тільки робота нейромереж"
      ]
    },
    {
      id: "ai-2",
      category: "AI",
      question: "Що таке overfitting?",
      correct: "Модель запам’ятала тренувальні дані і погано узагальнює",
      incorrect: ["Модель занадто проста", "Дані без шуму", "Модель не робить помилок ніколи"]
    },
    {
      id: "ai-3",
      category: "AI",
      question: "Навіщо потрібен train/test split?",
      correct: "Перевірити якість на даних, яких модель не бачила",
      incorrect: ["Збільшити датасет", "Прибрати метрики", "Зробити код синхронним"]
    },
    {
      id: "ai-4",
      category: "AI",
      question: "Що таке prompt у контексті LLM?",
      correct: "Текст/інструкція для моделі, щоб отримати відповідь",
      incorrect: ["Файл з вагами", "API ключ", "Мова програмування"]
    },
    {
      id: "ai-5",
      category: "AI",
      question: "Що робить loss (функція втрат)?",
      correct: "Вимірює помилку, яку мінімізують під час навчання",
      incorrect: ["Зберігає модель", "Збільшує параметри", "Вимикає overfitting"]
    },

    {
      id: "ai-6",
      category: "AI",
      question: "Що таке dataset?",
      correct: "Набір даних для навчання або оцінки моделі",
      incorrect: ["Список CSS-стилів", "Команда в Git", "Файл з логотипом"]
    },
    {
      id: "ai-7",
      category: "AI",
      question: "Що таке label у класифікації?",
      correct: "Правильний клас/відповідь для прикладу",
      incorrect: ["Випадковий шум", "Тільки назва датасету", "Тип шрифту"]
    },
    {
      id: "ai-8",
      category: "AI",
      question: "Що таке feature (ознака)?",
      correct: "Параметр/характеристика, що описує об’єкт у даних",
      incorrect: ["Фінальний результат навчання", "Помилка компіляції", "Формат відео"]
    },
    {
      id: "ai-9",
      category: "AI",
      question: "Що таке inference?",
      correct: "Використання навченої моделі для отримання прогнозу/відповіді",
      incorrect: ["Процес монтажу відео", "Зміна CSS-теми", "Створення репозиторію"]
    },
    {
      id: "ai-10",
      category: "AI",
      question: "Що таке underfitting?",
      correct: "Модель занадто проста і не вловлює закономірності",
      incorrect: ["Модель надто точна", "Модель завжди переобучена", "Це синонім overfitting"]
    },

    {
      id: "ai-11",
      category: "AI",
      question: "Що таке epoch?",
      correct: "Один повний прохід по тренувальному набору даних",
      incorrect: ["Один запит до API", "Один токен у тексті", "Один кадр у відео"]
    },
    {
      id: "ai-12",
      category: "AI",
      question: "Що таке batch?",
      correct: "Частина даних, на якій робиться один крок навчання",
      incorrect: ["Один файл CSS", "Таблиця в БД", "Один рядок коду"]
    },
    {
      id: "ai-13",
      category: "AI",
      question: "Що таке learning rate?",
      correct: "Параметр, що задає розмір кроку оновлення ваг",
      incorrect: ["Швидкість інтернету", "Кількість питань у квізі", "Розмір екрана"]
    },
    {
      id: "ai-14",
      category: "AI",
      question: "Що таке нейронна мережа (нейромережа)?",
      correct: "Модель з шарами нейронів, що навчається вагам на даних",
      incorrect: ["Схема БД", "Протокол HTTP", "Редактор коду"]
    },
    {
      id: "ai-15",
      category: "AI",
      question: "Що таке weights (ваги) в моделі?",
      correct: "Параметри моделі, які змінюються під час навчання",
      incorrect: ["Список URL", "Назва категорій", "Кількість пікселів"]
    },

    {
      id: "ai-16",
      category: "AI",
      question: "Що таке bias (зміщення) у моделі?",
      correct: "Додатковий параметр, що допомагає зсунути вихід нейрона",
      incorrect: ["Тільки упередження в людей", "Режим браузера", "Токен доступу"]
    },
    {
      id: "ai-17",
      category: "AI",
      question: "Що таке validation set?",
      correct: "Дані для перевірки якості під час підбору налаштувань",
      incorrect: ["Дані для реклами", "Дані тільки для UI", "Файл конфігурації Git"]
    },
    {
      id: "ai-18",
      category: "AI",
      question: "Що таке test set?",
      correct: "Дані для фінальної оцінки моделі після навчання",
      incorrect: ["Дані для стилів", "Чернетка питань", "Список комітів"]
    },
    {
      id: "ai-19",
      category: "AI",
      question: "Що таке accuracy?",
      correct: "Частка правильних відповідей серед усіх відповідей",
      incorrect: ["Час відповіді сервера", "Розмір датасету", "Глибина DOM"]
    },
    {
      id: "ai-20",
      category: "AI",
      question: "Що означає precision?",
      correct: "Частка правильних серед передбачених позитивних",
      incorrect: ["Частка правильних серед усіх", "Середній час навчання", "Кількість токенів"]
    },

    {
      id: "ai-21",
      category: "AI",
      question: "Що означає recall?",
      correct: "Частка знайдених позитивних серед усіх справжніх позитивних",
      incorrect: ["Частка правильних серед передбачених", "Кількість шарів", "Розмір екрана"]
    },
    {
      id: "ai-22",
      category: "AI",
      question: "Що таке confusion matrix?",
      correct: "Таблиця помилок/правильних для класифікації по класах",
      incorrect: ["Список файлів", "Формат картинки", "Протокол мережі"]
    },
    {
      id: "ai-23",
      category: "AI",
      question: "Що таке regression?",
      correct: "Задача прогнозування числового значення",
      incorrect: ["Задача пошуку жанру", "Задача рендеру UI", "Задача шифрування"]
    },
    {
      id: "ai-24",
      category: "AI",
      question: "Що таке classification?",
      correct: "Задача вибору класу/категорії для об’єкта",
      incorrect: ["Задача монтажу відео", "Задача оптимізації CSS", "Задача видалення файлів"]
    },
    {
      id: "ai-25",
      category: "AI",
      question: "Навіщо використовують try/catch при fetch до AI API?",
      correct: "Щоб коректно обробити помилки мережі/JSON і не зламати застосунок",
      incorrect: ["Щоб прискорити GPU", "Щоб змінити колір фону", "Щоб створити нову гілку git"]
    }
  ],

  js: [
    {
      id: "js-1",
      category: "JavaScript",
      question: "Що дає 'use strict'?",
      correct: "Строгий режим, який робить помилки більш явними",
      incorrect: ["Оптимізацію без змін", "Вимикає модулі", "Змінює типи змінних"]
    },
    {
      id: "js-2",
      category: "JavaScript",
      question: "Що буде у strict mode при присвоєнні неоголошеній змінній?",
      correct: "ReferenceError",
      incorrect: ["TypeError", "Створиться глобальна змінна", "Нічого"]
    },
    {
      id: "js-3",
      category: "JavaScript",
      question: "Чим let відрізняється від var?",
      correct: "let має блочну область видимості, var — функціональну",
      incorrect: ["var не можна змінювати", "let тільки в браузері", "різниці немає"]
    },
    {
      id: "js-4",
      category: "JavaScript",
      question: "Що таке Promise?",
      correct: "Об’єкт для асинхронного результату (успіх/помилка)",
      incorrect: ["Цикл", "Метод масиву", "Тип даних CSS"]
    },
    {
      id: "js-5",
      category: "JavaScript",
      question: "Що повертає Array.prototype.map?",
      correct: "Новий масив після перетворення кожного елемента",
      incorrect: ["Той самий масив", "Один елемент", "undefined"]
    },

    {
      id: "js-6",
      category: "JavaScript",
      question: "Чим === відрізняється від == ?",
      correct: "=== порівнює без приведення типів, == може приводити типи",
      incorrect: ["== завжди точніший", "=== працює тільки з числами", "Різниці немає"]
    },
    {
      id: "js-7",
      category: "JavaScript",
      question: "Що таке hoisting?",
      correct: "Підняття оголошень (деяких) змінних/функцій угору області видимості",
      incorrect: ["Стиснення файлів", "Зміна теми UI", "Запуск сервера"]
    },
    {
      id: "js-8",
      category: "JavaScript",
      question: "Що таке closure (замикання)?",
      correct: "Функція, яка пам’ятає зовнішнє лексичне оточення",
      incorrect: ["Видалення змінних", "Команда git commit", "Масив без елементів"]
    },
    {
      id: "js-9",
      category: "JavaScript",
      question: "Чим arrow function відрізняється від звичайної?",
      correct: "Arrow function не має власного this і arguments",
      incorrect: ["Arrow завжди async", "Arrow працює тільки в Node.js", "Ніяк не відрізняється"]
    },
    {
      id: "js-10",
      category: "JavaScript",
      question: "Що таке event loop?",
      correct: "Механізм, що обробляє чергу задач і мікрозадач у JS",
      incorrect: ["Таблиця в БД", "CSS-анімація", "HTML-тег"]
    },

    {
      id: "js-11",
      category: "JavaScript",
      question: "Що робить JSON.parse()?",
      correct: "Перетворює JSON-рядок у JS-об’єкт/масив",
      incorrect: ["Перетворює об’єкт у JSON", "Шифрує рядок", "Змінює тему"]
    },
    {
      id: "js-12",
      category: "JavaScript",
      question: "Що робить JSON.stringify()?",
      correct: "Перетворює JS-об’єкт/масив у JSON-рядок",
      incorrect: ["Перетворює JSON у об’єкт", "Стискає файл", "Створює модуль"]
    },
    {
      id: "js-13",
      category: "JavaScript",
      question: "Що робить Array.filter()?",
      correct: "Повертає новий масив елементів, що пройшли умову",
      incorrect: ["Сортує масив", "Змінює оригінальний масив завжди", "Повертає число"]
    },
    {
      id: "js-14",
      category: "JavaScript",
      question: "Що робить Array.reduce()?",
      correct: "Згортає масив в одне значення через accumulator",
      incorrect: ["Копіює масив", "Додає елемент у кінець", "Видаляє всі елементи"]
    },
    {
      id: "js-15",
      category: "JavaScript",
      question: "Що таке DOM?",
      correct: "Об’єктна модель документа для роботи зі сторінкою",
      incorrect: ["Тип бази даних", "Протокол HTTP", "Формат відео"]
    },

    {
      id: "js-16",
      category: "JavaScript",
      question: "Що таке module (ESM)?",
      correct: "Файл з export/import для організації та повторного використання коду",
      incorrect: ["Таблиця стилів", "Команда для git", "Тип зображення"]
    },
    {
      id: "js-17",
      category: "JavaScript",
      question: "Навіщо потрібен try/catch у async функції?",
      correct: "Щоб зловити помилку проміса і коректно обробити її",
      incorrect: ["Щоб зробити код швидшим", "Щоб вимкнути strict mode", "Щоб створити масив"]
    },
    {
      id: "js-18",
      category: "JavaScript",
      question: "Що повертає fetch()?",
      correct: "Promise, який резолвиться у Response",
      incorrect: ["Готовий JSON одразу", "Масив", "Рядок HTML"]
    },
    {
      id: "js-19",
      category: "JavaScript",
      question: "Як перевірити успішність HTTP-відповіді у fetch?",
      correct: "Перевірити res.ok або res.status",
      incorrect: ["Перевірити тільки console.log", "Завжди успішно", "Перевірити res.length"]
    },
    {
      id: "js-20",
      category: "JavaScript",
      question: "Що таке Map?",
      correct: "Колекція ключ-значення, де ключ може бути будь-якого типу",
      incorrect: ["Метод масиву", "CSS-селектор", "HTML-атрибут"]
    },

    {
      id: "js-21",
      category: "JavaScript",
      question: "Що таке Set?",
      correct: "Колекція унікальних значень без дублікатів",
      incorrect: ["Клас для стилів", "Формат JSON", "Тип помилки"]
    },
    {
      id: "js-22",
      category: "JavaScript",
      question: "Що таке template literal?",
      correct: "Рядок у бектиках ``, з інтерполяцією ${...}",
      incorrect: ["Тип масиву", "Метод fetch", "Властивість CSS"]
    },
    {
      id: "js-23",
      category: "JavaScript",
      question: "Що таке destructuring?",
      correct: "Розпаковка властивостей об’єкта/масиву у змінні",
      incorrect: ["Шифрування рядка", "Стиснення файлу", "Команда git pull"]
    },
    {
      id: "js-24",
      category: "JavaScript",
      question: "Для чого потрібен оператор ternary (умовний) ? :",
      correct: "Для короткого запису if/else, що повертає значення",
      incorrect: ["Для циклів", "Для імпорту модулів", "Для створення класу"]
    }
  ],

  movies: [
    {
      id: "movies-1",
      category: "Movies",
      question: "Що означає 'sequel'?",
      correct: "Продовження фільму",
      incorrect: ["Ремейк", "Трейлер", "Документальний фільм"]
    },
    {
      id: "movies-2",
      category: "Movies",
      question: "Що таке plot twist?",
      correct: "Неочікуваний поворот сюжету",
      incorrect: ["Назва жанру", "Саундтрек", "Роль режисера"]
    },
    {
      id: "movies-3",
      category: "Movies",
      question: "Interstellar найчастіше відносять до жанру…",
      correct: "Наукова фантастика",
      incorrect: ["Комедія", "Жахи", "Мелодрама"]
    },
    {
      id: "movies-4",
      category: "Movies",
      question: "Що таке “камео” у фільмі?",
      correct: "Коротка поява відомої людини у кадрі",
      incorrect: ["Постер фільму", "Місце зйомок", "Назва студії"]
    },
    {
      id: "movies-5",
      category: "Movies",
      question: "Що таке “саундтрек”?",
      correct: "Музичний супровід фільму",
      incorrect: ["План зйомок", "Текст сценарію", "Список акторів"]
    },

    {
      id: "movies-6",
      category: "Movies",
      question: "Хто такий режисер?",
      correct: "Людина, що керує постановкою і творчим процесом зйомок",
      incorrect: ["Той, хто тільки монтує", "Той, хто лише грає роль", "Той, хто продає квитки"]
    },
    {
      id: "movies-7",
      category: "Movies",
      question: "Що таке сценарій?",
      correct: "Текстова основа фільму: сцени, події, діалоги",
      incorrect: ["Тільки музика", "Тільки костюми", "Тільки титри"]
    },
    {
      id: "movies-8",
      category: "Movies",
      question: "Що робить оператор (кінематографіст)?",
      correct: "Відповідає за зображення: камера, світло, композиція",
      incorrect: ["Пише сценарій", "Займається прокатом", "Підбирає акторів"]
    },
    {
      id: "movies-9",
      category: "Movies",
      question: "Що таке монтаж?",
      correct: "Процес складання сцен у цілісну історію",
      incorrect: ["Тільки зйомка", "Тільки озвучка", "Тільки реклама"]
    },
    {
      id: "movies-10",
      category: "Movies",
      question: "Що означає “ремейк”?",
      correct: "Нова версія вже існуючого фільму",
      incorrect: ["Продовження", "Трейлер", "Короткий фільм (short)"]
    },

    {
      id: "movies-11",
      category: "Movies",
      question: "Що таке “преквел” (prequel)?",
      correct: "Історія, що відбувається до подій оригінального фільму",
      incorrect: ["Історія після фіналу", "Повна копія кадр у кадр", "Тільки документалка"]
    },
    {
      id: "movies-12",
      category: "Movies",
      question: "Що таке “трейлер”?",
      correct: "Коротке промо-відео для презентації фільму",
      incorrect: ["Повний фільм", "Саундтрек", "Кастинг-лист"]
    },
    {
      id: "movies-13",
      category: "Movies",
      question: "Що таке “жанр”?",
      correct: "Категорія фільму за стилем і змістом",
      incorrect: ["Рейтинг на сайті", "Локація зйомок", "Назва камери"]
    },
    {
      id: "movies-14",
      category: "Movies",
      question: "Що таке “логлайн”?",
      correct: "Дуже короткий опис сюжету в 1–2 реченнях",
      incorrect: ["Список акторів", "Список ефектів VFX", "Сторіборд"]
    },
    {
      id: "movies-15",
      category: "Movies",
      question: "Що таке “синопсис”?",
      correct: "Короткий переказ основних подій сюжету",
      incorrect: ["Тільки назва фільму", "Тільки музика", "Тільки трейлер"]
    },

    {
      id: "movies-16",
      category: "Movies",
      question: "Що таке “саунд-дизайн”?",
      correct: "Робота зі звуками: атмосфери, ефекти, баланс",
      incorrect: ["Робота тільки з титрами", "Робота тільки з костюмами", "Робота тільки з кадром"]
    },
    {
      id: "movies-17",
      category: "Movies",
      question: "Що таке “субтитри”?",
      correct: "Текстовий переклад/передача діалогів на екрані",
      incorrect: ["Озвучка іншими акторами", "Постер", "Список сцен"]
    },
    {
      id: "movies-18",
      category: "Movies",
      question: "Що таке “дубляж”?",
      correct: "Озвучення іншою мовою з підбором голосів",
      incorrect: ["Монтаж відео", "Кольорокорекція", "Зйомка з дрону"]
    },
    {
      id: "movies-19",
      category: "Movies",
      question: "Що таке “постпродакшн”?",
      correct: "Етап після зйомок: монтаж, звук, VFX, колір",
      incorrect: ["Підготовка сценарію", "Кастинг", "Репетиції акторів"]
    },
    {
      id: "movies-20",
      category: "Movies",
      question: "Що таке VFX?",
      correct: "Візуальні ефекти, що доробляються на комп’ютері",
      incorrect: ["Тільки грим", "Тільки освітлення", "Тільки музика"]
    },

    {
      id: "movies-21",
      category: "Movies",
      question: "Що таке “коліркорекція” (color grading)?",
      correct: "Налаштування кольору/контрасту для стилю і настрою кадру",
      incorrect: ["Заміна акторів", "Написання сценарію", "Вибір жанру"]
    },
    {
      id: "movies-22",
      category: "Movies",
      question: "Що таке “сторіборд”?",
      correct: "Розкадровка: малюнки кадрів для планування сцен",
      incorrect: ["Список реплік", "Список локацій", "Список нагород"]
    },
    {
      id: "movies-23",
      category: "Movies",
      question: "Що таке “кадр”?",
      correct: "Окремий візуальний фрагмент, знятий камерою",
      incorrect: ["Окрема репліка", "Окремий жанр", "Окремий трейлер"]
    },
    {
      id: "movies-24",
      category: "Movies",
      question: "Що таке “сцена”?",
      correct: "Частина історії з дією в одному місці/часі",
      incorrect: ["Один кадр", "Тільки музика", "Тільки титри"]
    },
    {
      id: "movies-25",
      category: "Movies",
      question: "Що таке “жанр: трилер”?",
      correct: "Жанр, що будує напругу, інтригу і хвилювання",
      incorrect: ["Тільки смішні сцени", "Тільки космічні подорожі", "Тільки документалістика"]
    }
  ]
};
