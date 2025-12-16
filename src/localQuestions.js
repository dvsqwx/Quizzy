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
    }
  ],
  movies: [
    {
      id: "m-1",
      category: "Movies",
      question: "Хто зіграв Нео у 'Матриці'?",
      correct: "Кіану Рівз",
      incorrect: ["Том Круз", "Бред Пітт", "Метт Деймон"]
    },
    {
      id: "m-2",
      category: "Movies",
      question: "Що означає 'sequel'?",
      correct: "Продовження фільму",
      incorrect: ["Ремейк", "Трейлер", "Документальний фільм"]
    },
    {
      id: "m-3",
      category: "Movies",
      question: "Як називається премія кіноакадемії США?",
      correct: "Оскар",
      incorrect: ["Еммі", "Греммі", "Каннська пальма"]
    },
    {
      id: "m-4",
      category: "Movies",
      question: "Що таке plot twist?",
      correct: "Неочікуваний поворот сюжету",
      incorrect: ["Назва жанру", "Саундтрек", "Роль режисера"]
    },
    {
      id: "m-5",
      category: "Movies",
      question: "Interstellar найчастіше відносять до жанру…",
      correct: "Наукова фантастика",
      incorrect: ["Комедія", "Жахи", "Мелодрама"]
    }
  ]
};
