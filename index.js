// ===== Câu 1: Constructor function Product =====
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// ===== Câu 2: Tạo mảng products >= 6 sản phẩm, >= 2 danh mục =====
const products = [
  new Product(1, "iPhone 15 Pro", 35000000, 10, "Phone", true),
  new Product(2, "Samsung S24", 28000000, 5, "Phone", true),
  new Product(3, "MacBook Air M2", 32000000, 0, "Laptop", true),
  new Product(4, "AirPods Pro", 6000000, 20, "Accessories", true),
  new Product(5, "Apple Watch", 12000000, 3, "Accessories", false),
  new Product(6, "Dell XPS 13", 29000000, 7, "Laptop", true),
];

console.log("===== Câu 3: Mảng chỉ chứa name, price =====");
const productNamesAndPrices = products.map((p) => ({
  name: p.name,
  price: p.price,
}));
console.log(productNamesAndPrices);

console.log("===== Câu 4: Sản phẩm còn hàng (quantity > 0) =====");
const inStockProducts = products.filter((p) => p.quantity > 0);
console.log(inStockProducts);

console.log("===== Câu 5: Có ít nhất 1 SP giá > 30.000.000 không? =====");
const hasExpensiveProduct = products.some((p) => p.price > 30000000);
console.log(hasExpensiveProduct);

console.log(
  "===== Câu 6: Tất cả SP 'Accessories' có isAvailable = true không? =====",
);
const allAccessoriesAvailable = products
  .filter((p) => p.category === "Accessories")
  .every((p) => p.isAvailable === true);
console.log(allAccessoriesAvailable);

console.log("===== Câu 7: Tổng giá trị kho (price * quantity) =====");
const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.quantity,
  0,
);
console.log(totalInventoryValue);

console.log("===== Câu 8: for...of in: Tên - Danh mục - Trạng thái =====");
for (const p of products) {
  console.log(
    `Tên: ${p.name} | Danh mục: ${p.category} | Trạng thái: ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`,
  );
}

console.log(
  "===== Câu 9: for...in in tên thuộc tính và giá trị (1 sản phẩm mẫu) =====",
);
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

console.log("===== Câu 10: Danh sách tên SP đang bán và còn hàng =====");
const sellingAndInStockNames = products
  .filter((p) => p.isAvailable && p.quantity > 0)
  .map((p) => p.name);
console.log(sellingAndInStockNames);
