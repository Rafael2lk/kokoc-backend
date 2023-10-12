import { Sequelize } from "sequelize";

const fs = require("fs");
const sequelize = new Sequelize(
    "ogures", 
    "user1", 
    "samsarrazmas", 
    {
        host: "rc1b-r4wfmsnk5oru534u.mdb.yandexcloud.net", 
        port: 6432, 
        dialect: "postgres", 
        dialectOptions: {
            ssl: {
                rejectUnauthorized: true,
                ca: fs.readFileSync("C:\\Users\\rafa-\\.postgresql\\root.crt").toString(),
            },
        },
        logging: false, 
    }
);

export default sequelize;
