let bookStore = [
    { id: 1, name: "The Great Gatsby", price: 150000, author: "F. Scott Fitzgerald", category: "Tiểu thuyết" },
    { id: 2, name: "Thinking, Fast and Slow", price: 200000, author: "Daniel Kahneman", category: "Kinh tế" },
    { id: 3, name: "A Brief History of Time", price: 180000, author: "Stephen Hawking", category: "Khoa học" },
    { id: 4, name: "Sapiens: A Brief History of Humankind", price: 220000, author: "Yuval Noah Harari", category: "Lịch sử" }
];

let nextId = 5;

function displayBooks() {
    console.log("Danh sách sách trong kho:");
    bookStore.forEach(book => {
        console.log(`ID: ${book.id} | ${book.name} | ${book.author} | ${book.price} VND | ${book.category}`);
    });
}
function addBook(name, price, author, category) {

    if (bookStore.some(book => book.name.toLowerCase() === name.toLowerCase())) {
        console.log("Tên sách đã tồn tại.");
        return;
    }

    if (price <= 0 || isNaN(price)) {
        console.log("Giá không hợp lệ.");
        return;
    }

    const validCategories = ["Tiểu thuyết", "Kinh tế", "Khoa học", "Lịch sử"];
    if (!validCategories.includes(category)) {
        console.log("Thể loại không hợp lệ.");
        return;
    }

    bookStore.push({
        id: nextId++,
        name,
        price,
        author,
        category
    });

    console.log("Thêm sách thành công!");
}
function deleteBook(name) {
    const index = bookStore.findIndex(
        book => book.name.toLowerCase() === name.toLowerCase()
    );

    if (index === -1) {
        console.log("Không tìm thấy sách.");
        return;
    }

    bookStore.splice(index, 1);
    console.log("Xóa thành công!");
}
function updateBook(name, newPrice, newCategory) {
    const book = bookStore.find(
        book => book.name.toLowerCase() === name.toLowerCase()
    );

    if (!book) {
        console.log("Không tìm thấy sách.");
        return;
    }

    if (newPrice <= 0 || isNaN(newPrice)) {
        console.log("Giá không hợp lệ.");
        return;
    }

    const validCategories = ["Tiểu thuyết", "Kinh tế", "Khoa học", "Lịch sử"];
    if (!validCategories.includes(newCategory)) {
        console.log("Thể loại không hợp lệ.");
        return;
    }

    book.price = newPrice;
    book.category = newCategory;

    console.log("Cập nhật thành công!");
}
function findBookByName(name) {
    const book = bookStore.find(
        book => book.name.toLowerCase() === name.toLowerCase()
    );

    if (!book) {
        console.log("Không tìm thấy sách.");
    } else {
        console.log(book);
    }
}
function filterBooksByCategory(category) {
    const books = bookStore.filter(book => book.category === category);

    if (books.length === 0) {
        console.log("Không có sách thuộc thể loại này.");
    } else {
        books.forEach(book => console.log(book));
    }
}
function calculateTotalValue() {
    const total = bookStore.reduce((sum, book) => sum + book.price, 0);
    console.log("Tổng giá trị kho:", total, "VND");
}
function sortBooksByPrice(order) {
    if (order === "asc") {
        bookStore.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
        bookStore.sort((a, b) => b.price - a.price);
    } else {
        console.log("Nhập 'asc' hoặc 'desc'");
        return;
    }

    displayBooks();
}

// MENU
let choice;

while (choice !== 10) {

    choice = Number(prompt(`
    ===== MENU =====
    1. Thêm sách
    2. Xóa sách
    3. Hiển thị danh sách
    4. Cập nhật sách
    5. Tìm sách theo tên
    6. Lọc theo thể loại
    7. Tổng giá trị kho
    8. Sắp xếp theo giá
    9. Tìm theo khoảng giá
    10. Thoát
    `));

    switch (choice) {

        case 1:
            let name = prompt("Tên sách:");
            let price = Number(prompt("Giá:"));
            let author = prompt("Tác giả:");
            let category = prompt("Thể loại:");
            addBook(name, price, author, category);
            break;

        case 2:
            deleteBook(prompt("Nhập tên sách cần xóa:"));
            break;

        case 3:
            displayBooks();
            break;

        case 4:
            let updateName = prompt("Tên sách cần cập nhật:");
            let newPrice = Number(prompt("Giá mới:"));
            let newCategory = prompt("Thể loại mới:");
            updateBook(updateName, newPrice, newCategory);
            break;

        case 5:
            findBookByName(prompt("Tên sách cần tìm:"));
            break;

        case 6:
            filterBooksByCategory(prompt("Nhập thể loại:"));
            break;

        case 7:
            calculateTotalValue();
            break;

        case 8:
            sortBooksByPrice(prompt("asc hoặc desc:"));
            break;

        case 9:
            break;

        case 10:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ.");
    }
}