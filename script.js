const catalog = [
  { name: "Nike Air Max", price: 5200, category: "Взуття" },
  { name: "Adidas Hoodie", price: 2100, category: "Одяг" },
  { name: "Samsung Galaxy Buds", price: 3400, category: "Електроніка" },
  { name: "Levi's Jeans", price: 2800, category: "Одяг" },
  { name: "Xiaomi Power Bank", price: 900, category: "Електроніка" },
  { name: "Puma T-shirt", price: 1200, category: "Одяг" }
];

const cheapProducts = catalog.filter(product => product.price < 3000);
console.log("Товари дешевше 3000:", cheapProducts);

const productNames = catalog.map(product => product.name);
console.log("Назви товарів:", productNames);


const categories = new Set(catalog.map(product => product.category));
console.log("Унікальні категорії:", [...categories]);


const priceList = new Map();
catalog.forEach(product => {
  priceList.set(product.name, product.price);
});

console.log("Ціна Nike Air Max:", priceList.get("Nike Air Max"));
console.log("Ціна Xiaomi Power Bank:", priceList.get("Xiaomi Power Bank"));


const userLogs = [
  { id: 1, "user name": "Dima", data: { h: 180, w: 85 }, bmi: 26.2, "is healthy": false },
  { id: 2, "user name": "Olena", data: { h: 165, w: 55 }, bmi: 20.2, "is healthy": true },
  { id: 3, "user name": "Igor", data: { h: 190, w: 100 }, bmi: 27.7, "is healthy": false },
  { id: 4, "user name": "Katya", data: { h: 170, w: 60 }, bmi: 20.8, "is healthy": true },
  { id: 5, "user name": "Andriy", data: { h: 175, w: 75 }, bmi: 24.5, "is healthy": true }
];

console.log("Список користувачів BMI:", userLogs);

const healthyUsers = userLogs.filter(user => user["is healthy"]);
console.log("Здорові користувачі:", healthyUsers);

const userNames = userLogs.map(user => user["user name"]);
console.log("Імена користувачів:", userNames);

const averageBmi =
  userLogs.reduce((sum, user) => sum + user.bmi, 0) / userLogs.length;

console.log("Середній BMI:", averageBmi.toFixed(2));