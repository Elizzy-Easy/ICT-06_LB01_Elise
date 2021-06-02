// import connection
import db from "../config/database.js";
 
// Get All Products
export const getProducts = (result) => {
    db.query("SELECT * FROM song", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Product
export const getProductById = (id, result) => {
    db.query("SELECT * FROM song WHERE product_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Product to Database
export const insertProduct = (data, result) => {
    db.query("INSERT INTO song SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
export const updateProductById = (data, id, result) => {
    db.query("UPDATE song SET author = ?, songTitle = ?, artistName = ?, albumName = ?, releaseDate = ?, rating = ?, songComment = ?, remarkPositive = ?, remarkNegative = ? WHERE product_id = ?", [data.author, data.songTitle, data.artistName, data.albumName, data.releaseDate, data.rating, data.songComment, data.remarkPositive, data.remarkNegative, id,], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM song WHERE product_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
