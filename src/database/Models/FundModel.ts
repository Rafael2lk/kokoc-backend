import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../sync";

export interface FundModelI {
    id: number;
    title: string;
    category: number;
}

type FundModelCreation = Optional<FundModelI, "id">;

class FundModel extends Model<FundModelI, FundModelCreation> {
    declare id: number;
    declare title: string;
    declare category: number;
}

FundModel.init({
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
    category: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, { sequelize, tableName: "Fund" });

export default FundModel;
