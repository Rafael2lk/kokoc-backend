"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const fs = require("fs");
const sequelize = new sequelize_1.Sequelize("ogures", "user1", "samsarrazmas", {
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
});
exports.default = sequelize;
