const mongoose = require('mongoose');
const dbconnect = async () => {
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect("mongodb://localhost:27017/user_apirest", {});
        console.log("Conexion correcta");
    } catch (err) {
        console.log("Error de conexion:", err.message);
    }
};

module.exports = dbconnect;
