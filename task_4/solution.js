// Задание 4.1. Вывод карточек товаров
// Аргументом функции является JSON
    // Преобразуйте строку json, переданную как аргумент функции, в объект с помощью функции JSON.parse(json)
    // и запишите в переменную data
    // Верните как результат функции свойство products объекта data

function parseProducts(json) {
    let data = JSON.parse(json);
    return data.products;
}

// Напишите функцию renderProductsCards(json)
// Аргументом функции является JSON
// Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются// Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products
// Запишите в переменную length значение свойства products.length
// Напишите цикл, в котором перебираете все products от 0 до (length - 1)
// место для пункта 7 Каждую итерацию цикла вызывайте функцию addProduct, передавая элемент массива как аргумент:
// и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)

function renderProductsCards(json) {
    clearProducts();
    let products = parseProducts(json);
    let length = products.length;
    for (let i = 0; i < length; i++) {
        addProduct(products[i]);
    }
}





