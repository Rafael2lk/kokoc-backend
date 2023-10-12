import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../sync";

export interface ActivityModelI {
    id: number;
    title: string;
    valueType: number;
}

type ActivityModelCreation = Optional<ActivityModelI, "id">;

class ActivityModel extends Model<ActivityModelI, ActivityModelCreation> {
    declare id: number;
    declare title: string;
    declare valueType: number;
}

ActivityModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    valueType: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, { sequelize, tableName: "Activity" });

export default ActivityModel;
