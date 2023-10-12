import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../sync";

interface UserStatisticAttributes {
    id: number;
    userId: number;
    money: number;
    achievementsProgress: number;
    ratingProgress: number;
}

type UserStatisticCreationAttributes = Optional<UserStatisticAttributes, "id">;

class UserStatisticModel extends Model<UserStatisticAttributes, UserStatisticCreationAttributes> {
    declare id: number;
    declare userId: number;
    declare money: number;
    declare achievementsProgress: number;
    declare ratingProgress: number;

    // You can define class methods or associations here
}

UserStatisticModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        money: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        achievementsProgress: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ratingProgress: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { sequelize, tableName: "UserStatistic" }
);

export default UserStatisticModel;
