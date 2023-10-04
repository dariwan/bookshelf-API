const { addBookHandler, getAllBooksHandler, getDetailBooksHandler, editBooksByIdHandler, deleteBooksByIdHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path:'/books',
        handler: addBookHandler
    },
    {
        method : 'GET',
        path: '/books', 
        handler: getAllBooksHandler
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getDetailBooksHandler
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBooksByIdHandler
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBooksByIdHandler
    }
]

module.exports = routes