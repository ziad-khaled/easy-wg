import { Model, DataTypes } from "sequelize";
import {sequelize} from "./db_connection";

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            // Storing passwords in plaintext in the database is terrible.
            // Hashing the value with an appropriate cryptographic hash function is better.
            this.setDataValue('password', hash(value));
          }
    },
    contactNumber: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    paranoid: true, // don't truly delete records https://sequelize.org/master/manual/paranoid.html
});

export default User;