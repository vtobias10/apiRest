const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        nombre:{
            type: String
        },
        email:{
            type: String
        },
        contrasenia:{
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelUser = mongoose.model("users", userSchema);
module.exports = ModelUser;