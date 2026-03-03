
let bookStore = [
    { id: 1, name: "The Great Gatsby", price: 150000, author: "F. Scott Fitzgerald", category: "Tiểu thuyết" },
    { id: 2, name: "Thinking, Fast and Slow", price: 200000, author: "Daniel Kahneman", category: "Kinh tế" },
    { id: 3, name: "A Brief History of Time", price: 180000, author: "Stephen Hawking", category: "Khoa học" },
    { id: 4, name: "Sapiens: A Brief History of Humankind", price: 220000, author: "Yuval Noah Harari", category: "Lịch sử" }
];  
let nextid=5;

function displayBooks() {
    console.log("Danh sách sách trong kho:");
    bookStore.forEach(book => { 
        console.log(`ID: ${book.id}, Tên: ${book.name}, Tác giả: ${book.author}, Giá: ${book.price} VND, Thể loại: ${book.category}`);
    });
}

function addBook(id, name, price, author, category) {
    if (bookStore.some(book => book.id === id)) {
        console.log("ID sách đã tồn tại, vui lòng chọn ID khác.");
        return;
    }
    if (bookStore.some(book => book.name === name)) {
        console.log("Tên sách đã có trong kho.");
        return;
    }
    if (typeof price !== 'number' || price <= 0) {
        console.log("Giá sách phải là số và lớn hơn 0.");
        return;
    }
    const validCategories = ["Tiểu thuyết", "Kinh tế", "Khoa học", "Lịch sử"];
    if (!validCategories.includes(category)) {
        console.log("Thể loại không hợp lệ. Phải là một trong các giá trị: 'Tiểu thuyết', 'Kinh tế', 'Khoa học', 'Lịch sử'.");
        return;
    }
    bookStore.push({ id, name, price, author, category });
    console.log(`Đã thêm sách: ${name}`);
}
function deleteBook(name) {
    const bookIndex = bookStore.findIndex(book => book.name === name);
    if (bookIndex === -1) {
        console.log("Tên sách không tồn tại.");
        return;
    }
    const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa sách "${name}" không?`);
    if (confirmDelete) {
        bookStore.splice(bookIndex, 1);
        console.log("Xóa sách thành công!");
    } else {        console.log("Sách không bị xóa.");
    }
}
function updateBook(name, newPrice, newCategory) {
    const book = bookStore.find(book => book.name === name);
    if (!book) {
        console.log("Tên sách không tồn tại!");
        return;
    }
    if (typeof newPrice !== 'number' || newPrice <= 0) {
        console.log("Giá sách phải là số và lớn hơn 0.");
        return;
    }
    const validCategories = ["Tiểu thuyết", "Kinh tế", "Khoa học", "Lịch sử"];
    if (!validCategories.includes(newCategory)) {
        console.log("Thể loại không hợp lệ, phải là một trong các giá trị: 'Tiểu thuyết', 'Kinh tế', 'Khoa học', 'Lịch sử'.");
        return;
    }
    book.price = newPrice;
    book.category = newCategory;
    console.log(`Đã cập nhật sách: ${name}`);
}
function findBookByName(name) {
    const book = bookStore.find(book => book.name === name);
    if (!book) {
        console.log("Tên sách không tồn tại.");
    } else {        console.log(`Sách tìm thấy: ${book.name}, Tác giả: ${book.author}, Giá: ${book.price} VND`);
    }
}
function findBooksByAuthor(author) {
    const books = bookStore.filter(book => book.author === author);
    if (books.length === 0) {
        console.log("Tác giả không tồn tại.");
    } else {
        console.log(`Sách của tác giả ${author}:`);
        books.forEach(book => {
            console.log(`Tên: ${book.name}, Giá: ${book.price} VND, Thể loại: ${book.category}`);
        });
    }
}
function filterBooksByCategory(category) {  
    const validCategories = ["Tiểu thuyết", "Kinh tế", "Khoa học", "Lịch sử"];
    if (!validCategories.includes(category)) {
        console.log("Thể loại không hợp lệ! Phải là một trong các giá trị: 'Tiểu thuyết', 'Kinh tế', 'Khoa học', 'Lịch sử'.");
        return;
    }
    const books = bookStore.filter(book => book.category === category);
    if (books.length === 0) {
        console.log(`Không có sách nào thuộc thể loại ${category}.`);
    } else {
        console.log(`Sách thuộc thể loại ${category}:`);
        books.forEach(book => {
            console.log(`Tên: ${book.name}, Tác giả: ${book.author}, Giá: ${book.price} VND`);
        });
    }
}
function calculateTotalValue() {
    const totalValue = bookStore.reduce((total, book) => total + book.price, 0);
    console.log(`Tổng giá trị tồn kho là: ${totalValue} VND`);
}
function sortBooksByPrice(order) {  
    if (order === 'asc') {
        bookStore.sort((a, b) => a.price - b.price);
        console.log("Sách đã được sắp xếp theo giá tăng dần:");
    } else if (order === 'desc') {
        bookStore.sort((a, b) => b.price - a.price);
        console.log("Sách đã được sắp xếp theo giá giảm dần:");
    } else {
        console.log("Tham số sắp xếp không hợp lệ! Sử dụng 'asc' cho tăng dần hoặc 'desc' cho giảm dần.");
        return;
    }
    displayBooks();
}
let choice;
while (choice!==10) {
    choice=number(prompt(`
           menu
        1.Thêm sách
        2.Xóa sách
        3.hiển thị danh sách
        4.Cập nhập thông tin sách
        5.Tìm sách
        6.Lọc sách theo thể loại
        7.Tính tổng giá trị kho sách
        8.Sắp xếp sách theo giá
        9.Tìm kiếm sách theo khoảng giá
        10.Thoát
        `));
        switch (choice) {
            case 1:addBook();
                break;
            case 2:deleteBook(name);
                break;
            case 3:displayBooks();
                break;
            case 4:updateBook(name, newPrice, newCategory);
                break;
            case 5:findBookByName(name);
                break;
            case 6:filterBooksByCategory(category)
                break;
            case 7:calculateTotalValue();
                break;
            case 8:sortBooksByPrice(order);
                break;
            case 9:
                break;
            case 10:
                break;
            default:
                break;
        }
}