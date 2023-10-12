"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sync_1 = __importDefault(require("../sync"));
class UserStatisticModel extends sequelize_1.Model {
}
UserStatisticModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    money: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    achievementsProgress: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    ratingProgress: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { sequelize: sync_1.default, tableName: "UserStatistic" });
exports.default = UserStatisticModel;
