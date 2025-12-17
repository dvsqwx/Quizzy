export const localQuestionsByTopic = {
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
      question: "Що робить spread operator (...) ?",
      correct: "Розгортає масив/об’єкт у список елементів/властивостей",
      incorrect: ["Створює цикл", "Видаляє елементи", "Перетворює JSON у DOM"]
    },
    {
      id: "js-25",
      category: "JavaScript",
      question: "Що таке null?",
      correct: "Явне значення “нічого/порожньо”",
      incorrect: ["Невизначена змінна", "Масив", "Функція"]
    },

    {
      id: "js-26",
      category: "JavaScript",
      question: "Що таке undefined?",
      correct: "Значення змінної, якій не присвоєно значення",
      incorrect: ["Помилка синтаксису", "Завжди 0", "Список елементів DOM"]
    },
    {
      id: "js-27",
      category: "JavaScript",
      question: "Яка різниця між function declaration і function expression?",
      correct: "Declaration піднімається (hoisting) повністю, expression — ні",
      incorrect: ["Expression працює тільки в браузері", "Declaration не може мати параметрів", "Різниці немає"]
    },
    {
      id: "js-28",
      category: "JavaScript",
      question: "Що таке IIFE?",
      correct: "Функція, яка виконується одразу після оголошення",
      incorrect: ["Тип масиву", "Метод зберігання", "Формат файлу"]
    },
    {
      id: "js-29",
      category: "JavaScript",
      question: "Що означає “mutable”?",
      correct: "Об’єкт можна змінювати після створення",
      incorrect: ["Об’єкт не змінюється", "Об’єкт завжди null", "Об’єкт завжди undefined"]
    },
    {
      id: "js-30",
      category: "JavaScript",
      question: "Що означає “immutable” (в контексті значень)?",
      correct: "Значення не змінюється, створюється нове (наприклад, рядки)",
      incorrect: ["Значення завжди змінюється", "Це про CSS", "Це про HTML"]
    },

    {
      id: "js-31",
      category: "JavaScript",
      question: "Що буде, якщо викликати constructor без new у strict mode (звичайна функція)?",
      correct: "this буде undefined і може статися помилка при зверненні до this",
      incorrect: ["this стане window завжди", "Створиться об’єкт автоматично", "Нічого не зміниться"]
    },
    {
      id: "js-32",
      category: "JavaScript",
      question: "Навіщо потрібні модулі (import/export) у проекті?",
      correct: "Щоб розділити код на логічні частини і уникнути глобальних змінних",
      incorrect: ["Щоб браузер працював офлайн", "Щоб увімкнути CSS", "Щоб збільшити RAM"]
    },
    {
      id: "js-33",
      category: "JavaScript",
      question: "Що таке localStorage?",
      correct: "Сховище ключ-значення у браузері, що зберігається між перезавантаженнями",
      incorrect: ["Тимчасова змінна", "Серверна база даних", "Модуль Node.js"]
    },
    {
      id: "js-34",
      category: "JavaScript",
      question: "Яке обмеження localStorage (практично)?",
      correct: "Зберігає тільки рядки (string), об’єкти треба stringify/parse",
      incorrect: ["Зберігає тільки картинки", "Зберігає тільки числа", "Зберігає тільки функції"]
    },
    {
      id: "js-35",
      category: "JavaScript",
      question: "Що робить addEventListener?",
      correct: "Додає обробник подій для елемента",
      incorrect: ["Змінює CSS-файл", "Створює Promise", "Змінює URL"]
    },

    {
      id: "js-36",
      category: "JavaScript",
      question: "Що таке bubbling (спливання подій)?",
      correct: "Подія піднімається від елемента до його батьків",
      incorrect: ["Подія зникає", "Подія йде тільки вниз", "Подія зберігається в localStorage"]
    },
    {
      id: "js-37",
      category: "JavaScript",
      question: "Що таке event.target?",
      correct: "Елемент, на якому фактично сталася подія",
      incorrect: ["Завжди document", "Завжди window", "Це CSS-властивість"]
    },
    {
      id: "js-38",
      category: "JavaScript",
      question: "Що таке event.currentTarget?",
      correct: "Елемент, на якому висить поточний обробник події",
      incorrect: ["Елемент-діти", "CSS-клас", "Результат fetch"]
    },
    {
      id: "js-39",
      category: "JavaScript",
      question: "Що робить preventDefault()?",
      correct: "Скасовує стандартну дію браузера для події",
      incorrect: ["Видаляє елемент DOM", "Змінює тему", "Створює cookie"]
    },
    {
      id: "js-40",
      category: "JavaScript",
      question: "Що таке синхронний код?",
      correct: "Код виконується послідовно, крок за кроком",
      incorrect: ["Код завжди паралельний", "Код без змінних", "Код без функцій"]
    },

    {
      id: "js-41",
      category: "JavaScript",
      question: "Що таке асинхронний код?",
      correct: "Код, де операції можуть завершуватися пізніше (через Promise/події)",
      incorrect: ["Код без помилок", "Код без циклів", "Код тільки для CSS"]
    },
    {
      id: "js-42",
      category: "JavaScript",
      question: "Що таке microtask queue?",
      correct: "Черга мікрозадач (наприклад, .then), що виконується перед макрозадачами",
      incorrect: ["Список CSS-правил", "Файл package.json", "Папка src"]
    },
    {
      id: "js-43",
      category: "JavaScript",
      question: "Навіщо потрібен try/catch саме при JSON.parse?",
      correct: "JSON може бути некоректним і JSON.parse кине помилку",
      incorrect: ["Бо parse завжди повертає null", "Бо parse змінює DOM", "Бо parse працює тільки онлайн"]
    },
    {
      id: "js-44",
      category: "JavaScript",
      question: "Що таке “side effect” (побічний ефект) у функції?",
      correct: "Коли функція змінює зовнішній стан (DOM, змінні, сховище тощо)",
      incorrect: ["Коли функція повертає число", "Коли функція має аргументи", "Коли функція коротка"]
    },
    {
      id: "js-45",
      category: "JavaScript",
      question: "Що таке “pure function”?",
      correct: "Функція без побічних ефектів, результат залежить тільки від аргументів",
      incorrect: ["Функція, що завжди async", "Функція без return", "Функція, що змінює DOM"]
    },

    {
      id: "js-46",
      category: "JavaScript",
      question: "Що робить Array.includes()?",
      correct: "Перевіряє, чи є елемент у масиві (true/false)",
      incorrect: ["Сортує масив", "Видаляє елемент", "Повертає індекс завжди"]
    },
    {
      id: "js-47",
      category: "JavaScript",
      question: "Що повертає Array.find()?",
      correct: "Перший елемент, що задовольняє умову (або undefined)",
      incorrect: ["Масив всіх елементів", "Число завжди", "Новий об’єкт Response"]
    },
    {
      id: "js-48",
      category: "JavaScript",
      question: "Що робить Array.some()?",
      correct: "Повертає true, якщо хоча б один елемент проходить перевірку",
      incorrect: ["Повертає всі елементи", "Видаляє елементи", "Завжди false"]
    },
    {
      id: "js-49",
      category: "JavaScript",
      question: "Що робить Array.every()?",
      correct: "Повертає true, якщо всі елементи проходять перевірку",
      incorrect: ["Повертає перший елемент", "Робить копію масиву", "Завжди true"]
    },
    {
      id: "js-50",
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
      question: "Що таке “план” у кіно?",
      correct: "Крупність кадру (крупний/середній/загальний тощо)",
      incorrect: ["План закупівлі квитків", "План в CSS", "План у базі даних"]
    },

    {
      id: "movies-26",
      category: "Movies",
      question: "Що таке “загальний план”?",
      correct: "Кадр, де добре видно простір і персонажів у ньому",
      incorrect: ["Кадр тільки обличчя", "Кадр тільки предмета", "Кадр без зображення"]
    },
    {
      id: "movies-27",
      category: "Movies",
      question: "Що таке “крупний план”?",
      correct: "Кадр, що акцентує деталь (обличчя/предмет)",
      incorrect: ["Кадр із дуже далекої точки", "Тільки титри", "Тільки музика"]
    },
    {
      id: "movies-28",
      category: "Movies",
      question: "Що таке “середній план”?",
      correct: "Кадр, де персонаж видно приблизно по пояс/груди",
      incorrect: ["Кадр лише око", "Кадр лише локація без людей", "Кадр лише титри"]
    },
    {
      id: "movies-29",
      category: "Movies",
      question: "Що таке “темпоритм” у монтажі?",
      correct: "Ритм зміни кадрів, що впливає на емоційне сприйняття",
      incorrect: ["Швидкість інтернету", "Швидкість друку", "FPS у грі"]
    },
    {
      id: "movies-30",
      category: "Movies",
      question: "Що таке “жанрове кліше”?",
      correct: "Типовий повторюваний прийом для жанру",
      incorrect: ["Тип камери", "Тип мікрофона", "Тип кольору фону"]
    },

    {
      id: "movies-31",
      category: "Movies",
      question: "Що таке “кастинг”?",
      correct: "Відбір акторів на ролі",
      incorrect: ["Зйомка з дрону", "Монтаж звуку", "Створення VFX"]
    },
    {
      id: "movies-32",
      category: "Movies",
      question: "Хто такий продюсер?",
      correct: "Організовує виробництво: бюджет, команда, процес",
      incorrect: ["Тільки актор", "Тільки монтажер", "Тільки дизайнер постерів"]
    },
    {
      id: "movies-33",
      category: "Movies",
      question: "Що таке “декорації”?",
      correct: "Оформлення простору зйомок (сцени, предмети, середовище)",
      incorrect: ["Тільки музика", "Тільки діалоги", "Тільки спецефекти"]
    },
    {
      id: "movies-34",
      category: "Movies",
      question: "Що таке “реквізит”?",
      correct: "Предмети, які використовують актори/у сцені",
      incorrect: ["Тільки освітлення", "Тільки костюми", "Тільки титри"]
    },
    {
      id: "movies-35",
      category: "Movies",
      question: "Що таке “грим” у кіно?",
      correct: "Зміна зовнішності: макіяж, ефекти, зачіски",
      incorrect: ["Зйомка камери", "Написання коду", "Переклад субтитрів"]
    },

    {
      id: "movies-36",
      category: "Movies",
      question: "Що таке “сага” (в кінофраншизах)?",
      correct: "Серія фільмів, об’єднана спільним світом/історією",
      incorrect: ["Один короткий фільм", "Один трейлер", "Один постер"]
    },
    {
      id: "movies-37",
      category: "Movies",
      question: "Що таке “франшиза”?",
      correct: "Серія пов’язаних проєктів у одному бренді (фільми/спін-офи тощо)",
      incorrect: ["Тільки 1 фільм", "Тільки жанр", "Тільки нагорода"]
    },
    {
      id: "movies-38",
      category: "Movies",
      question: "Що таке “спін-оф” (spin-off)?",
      correct: "Окремий проєкт про другорядного персонажа/частину всесвіту",
      incorrect: ["Ремейк того ж фільму", "Трейлер", "Документальний фільм"]
    },
    {
      id: "movies-39",
      category: "Movies",
      question: "Що таке “кульмінація” у сюжеті?",
      correct: "Найвища точка напруги, ключовий момент історії",
      incorrect: ["Початок фільму", "Титри", "Рекламна пауза"]
    },
    {
      id: "movies-40",
      category: "Movies",
      question: "Що таке “експозиція” у сюжеті?",
      correct: "Початкова частина, де показують світ і вводять персонажів",
      incorrect: ["Фінал", "Саундтрек", "Монтаж звуку"]
    },

    {
      id: "movies-41",
      category: "Movies",
      question: "Що таке “антигерой”?",
      correct: "Головний персонаж з суперечливими рисами, не класичний герой",
      incorrect: ["Тільки злодій", "Тільки комік", "Тільки режисер"]
    },
    {
      id: "movies-42",
      category: "Movies",
      question: "Що таке “протагоніст”?",
      correct: "Головний герой історії",
      incorrect: ["Другорядний персонаж", "Оператор", "Касир кінотеатру"]
    },
    {
      id: "movies-43",
      category: "Movies",
      question: "Що таке “антагоніст”?",
      correct: "Персонаж/сила, що протидіє головному герою",
      incorrect: ["Сценарист", "Режисер", "Монтажер"]
    },
    {
      id: "movies-44",
      category: "Movies",
      question: "Що таке “сеттінг” (setting)?",
      correct: "Місце/час/умови, в яких відбуваються події",
      incorrect: ["Модель камери", "Квиток у кіно", "Тільки музика"]
    },
    {
      id: "movies-45",
      category: "Movies",
      question: "Що таке “діалог” у сценарії?",
      correct: "Репліки персонажів у сцені",
      incorrect: ["Тільки декорації", "Тільки монтаж", "Тільки титри"]
    },

    {
      id: "movies-46",
      category: "Movies",
      question: "Що таке “саундтрек vs саунд-дизайн” (різниця)?",
      correct: "Саундтрек — музика, саунд-дизайн — всі звуки/ефекти/атмосфери",
      incorrect: ["Це одне й те саме", "Саундтрек — тільки діалоги", "Саунд-дизайн — тільки титри"]
    },
    {
      id: "movies-47",
      category: "Movies",
      question: "Що таке “окрема сцена після титрів” (post-credits)?",
      correct: "Коротка сцена після титрів, часто як тизер продовження",
      incorrect: ["Початок фільму", "Ремейк", "Документальний жанр"]
    },
    {
      id: "movies-48",
      category: "Movies",
      question: "Що таке “пейсинг” (pacing)?",
      correct: "Темп розгортання подій і подачі інформації в історії",
      incorrect: ["Розмір екрану", "Якість звуку в kbps", "Тип камери"]
    },
    {
      id: "movies-49",
      category: "Movies",
      question: "Що таке “саспенс” (suspense)?",
      correct: "Напруга очікування, коли глядач хвилюється за події",
      incorrect: ["Комедія", "Трейлер", "Субтитри"]
    },
    {
      id: "movies-50",
      category: "Movies",
      question: "Що таке “жанр: трилер”?",
      correct: "Жанр, що будує напругу, інтригу і хвилювання",
      incorrect: ["Тільки смішні сцени", "Тільки космічні подорожі", "Тільки документалістика"]
    }
  ]
};
