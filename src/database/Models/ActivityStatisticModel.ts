import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../sync";

export interface ActivityStatisticModelI {
    userId: number;
    activityId: number;
    money: number;
    activityProgress: number;
}

type ActivityStatisticModelCreation = Optional<ActivityStatisticModelI, "userId">;

class ActivityStatisticModel extends Model<ActivityStatisticModelI, ActivityStatisticModelCreation> {
    declare userId: number;
    declare activityId: number;
    declare money: number;
    declare activityProgress: number;
}

ActivityStatisticModel.init({
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    activityId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    money: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    activityProgress: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, { sequelize, tableName: "ActivityStatistic" });

export default ActivityStatisticModel;
