import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import config from '../../../config/config';

const basename = path.basename(__filename);
const db: { [key: string]: any } = {};

let sequelize: Sequelize;
sequelize = new Sequelize(
  config.database!,
  config.username!,
  config.password!,
  {
    host: config.host || 'localhost',
    port: parseInt(config.port || '5432'),
    dialect: config.dialect as any
  }
);

fs
  .readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach((file: string) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
