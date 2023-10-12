import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../sync";


export interface UserModelI {
    id: number;
    name: string;
    email: string;
    achievemetsId: number;
    departmentId: number;
    type: number;
    photoUrl: string;
    fundid: number;
    password: string;
}

type UserModelCreation = Optional<UserModelI, "id">;

class UserModel extends Model<UserModelI, UserModelCreation> {
    declare id: number;
    declare name: string;
    declare email: string;
    declare achievemetsId: number;
    declare departmentId: number;
    declare type: number;
    declare photoUrl: string;
    declare fundid: number;
    declare password: string;
}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    achievemetsId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    departmentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    photoUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fundid: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { sequelize, tableName: "User" });


export default UserModel;
