"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sync_1 = __importDefault(require("../sync"));
class AchievementsModel extends sequelize_1.Model {
}
AchievementsModel.init({
    Id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    photoUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { sequelize: sync_1.default, tableName: "Achievements" });
exports.default = AchievementsModel;
