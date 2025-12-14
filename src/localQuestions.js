export const localQuestions = [
  {
    id: "loc-1",
    category: "JavaScript",
    question: "Що поверне typeof null?",
    correct: "object",
    incorrect: ["null", "undefined", "number"]
  },
  {
    id: "loc-2",
    category: "JavaScript",
    question: "Яка різниця між == та ===?",
    correct: "=== порівнює і тип, і значення",
    incorrect: ["== завжди кращий", "=== порівнює лише значення", "різниці немає"]
  },
  {
    id: "loc-3",
    category: "Async",
    question: "Що робить await?",
    correct: "Чекає Promise і повертає його результат",
    incorrect: ["Зупиняє event loop", "Робить код синхронним назавжди", "Вимикає fetch"]
  },
  {
    id: "loc-4",
    category: "Basics",
    question: "Який цикл виконується, поки умова true?",
    correct: "while",
    incorrect: ["forEach", "switch", "try/catch"]
  },
  {
    id: "loc-5",
    category: "Functions",
    question: "Що таке функція-колбек?",
    correct: "Функція, передана як аргумент іншій функції",
    incorrect: ["Функція без імені", "Функція з return", "Функція тільки для async"]
  }
];
