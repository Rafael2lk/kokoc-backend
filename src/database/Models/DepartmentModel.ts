import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../sync";

export interface DepartmentModelI {
    id: number;
    title: string;
}

type DepartmentModelCreation = Optional<DepartmentModelI, "id">;

class DepartmentModel extends Model<DepartmentModelI, DepartmentModelCreation> {
    declare id: number;
    declare title: string;
}

DepartmentModel.init({
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
}, { sequelize, tableName: "Department" });

export default DepartmentModel;
