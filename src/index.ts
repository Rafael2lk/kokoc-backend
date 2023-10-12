import express from "express"
import cors from "cors";
import db from "./database/sync" 
import UserModel from "./database/Models/UserModel";
import DepartmentModel from "./database/Models/DepartmentModel";
import FundModel from "./database/Models/FundModel";
import UserStatisticModel from "./database/Models/UserStatisticModel";
import ActivityModel from "./database/Models/ActivityModel";
import ActivityStatisticModel from "./database/Models/ActivityStatisticModel";
import AchievementsModel from "./database/Models/AchievementsModel";

import UserRouts from "./database/routes/UserRouts";
import DepartamentRouts from "./database/routes/DepartamentRouts";
import FundRouts from "./database/routes/FundRouts"
import ActivityRouts from "./database/routes/ActivityRouts"
import UserStatisticRoutes from "./database/routes/UserStatisticRouts"
import ActivityStatisticRouts from "./database/routes/ActivityStatisticRouts"
import AchievementsRouts from "./database/routes/Achievementsrouts"
const PID = process.pid
const app = express()
const PORT = 5000



const whiteList = [undefined, 'http://localhost:5000']

app.use(express.json())

app.use("/api", UserRouts);
app.use("/api", DepartamentRouts);
app.use("/api", FundRouts);
app.use("/api", ActivityRouts);
app.use("/api", UserStatisticRoutes);
app.use("/api", AchievementsRouts);
app.use("/api", ActivityStatisticRouts)

app.use(cors({
    credentials: true, origin: function(origin: any, callback: any) {
        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        }
    },
}))
const startServer = async () => {
    try {
        await db.sync({ alter: true });
        
        await AchievementsModel.sync();
        await ActivityModel.sync();
        await ActivityStatisticModel.sync();
        await DepartmentModel.sync();
        await FundModel.sync();
        await UserModel.sync();
        await UserStatisticModel.sync();

        await app.listen(PORT, () => {
            console.log("Connection with Data Base has been established successfully.");
            console.log(`Server started on PORT: ${PORT}, PID: ${PID}`);
        });
    } catch (error) {
        console.log(error);
    }
};

startServer()
