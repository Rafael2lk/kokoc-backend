"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sync_1 = __importDefault(require("./database/sync"));
const UserModel_1 = __importDefault(require("./database/Models/UserModel"));
const DepartmentModel_1 = __importDefault(require("./database/Models/DepartmentModel"));
const FundModel_1 = __importDefault(require("./database/Models/FundModel"));
const UserStatisticModel_1 = __importDefault(require("./database/Models/UserStatisticModel"));
const ActivityModel_1 = __importDefault(require("./database/Models/ActivityModel"));
const ActivityStatisticModel_1 = __importDefault(require("./database/Models/ActivityStatisticModel"));
const AchievementsModel_1 = __importDefault(require("./database/Models/AchievementsModel"));
const UserRouts_1 = __importDefault(require("./database/routes/UserRouts"));
const DepartamentRouts_1 = __importDefault(require("./database/routes/DepartamentRouts"));
const FundRouts_1 = __importDefault(require("./database/routes/FundRouts"));
const ActivityRouts_1 = __importDefault(require("./database/routes/ActivityRouts"));
const UserStatisticRouts_1 = __importDefault(require("./database/routes/UserStatisticRouts"));
const ActivityStatisticRouts_1 = __importDefault(require("./database/routes/ActivityStatisticRouts"));
const Achievementsrouts_1 = __importDefault(require("./database/routes/Achievementsrouts"));
const PID = process.pid;
const app = (0, express_1.default)();
const PORT = 5000;
const whiteList = [undefined, 'http://localhost:5000'];
app.use(express_1.default.json());
app.use("/api", UserRouts_1.default);
app.use("/api", DepartamentRouts_1.default);
app.use("/api", FundRouts_1.default);
app.use("/api", ActivityRouts_1.default);
app.use("/api", UserStatisticRouts_1.default);
app.use("/api", Achievementsrouts_1.default);
app.use("/api", ActivityStatisticRouts_1.default);
app.use((0, cors_1.default)({
    credentials: true, origin: function (origin, callback) {
        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        }
    },
}));
const startServer = async () => {
    try {
        await sync_1.default.sync({ alter: true });
        await AchievementsModel_1.default.sync();
        await ActivityModel_1.default.sync();
        await ActivityStatisticModel_1.default.sync();
        await DepartmentModel_1.default.sync();
        await FundModel_1.default.sync();
        await UserModel_1.default.sync();
        await UserStatisticModel_1.default.sync();
        await app.listen(PORT, () => {
            console.log("Connection with Data Base has been established successfully.");
            console.log(`Server started on PORT: ${PORT}, PID: ${PID}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
startServer();
