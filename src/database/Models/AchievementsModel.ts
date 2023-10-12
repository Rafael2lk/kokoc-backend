import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../sync";


export interface AchievementsModelAttributes {
    Id: number;
    title: string;
    description: string;
    photoUrl: string;
}


type AchievementsModelCreationAttributes = Optional<AchievementsModelAttributes, "Id">;

class AchievementsModel extends Model<AchievementsModelAttributes, AchievementsModelCreationAttributes> {
    declare Id: number;
    declare title: string;
    declare description: string;
    declare photoUrl: string;
}

AchievementsModel.init({
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    photoUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { sequelize, tableName: "Achievements" });

export default AchievementsModel;
