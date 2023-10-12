"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sync_1 = __importDefault(require("../sync"));
class UserModel extends sequelize_1.Model {
}
UserModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    achievemetsId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    departmentId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    type: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    photoUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    fundid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { sequelize: sync_1.default, tableName: "User" });
exports.default = UserModel;
