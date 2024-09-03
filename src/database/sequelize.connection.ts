import { Sequelize } from "sequelize-typescript";
import { Candidate } from "src/candidate/models/candidate-entity";
import { Client } from "src/client/models/client-entity";

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'onboarding',
  })