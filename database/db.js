const {Sequelize} = require('sequelize');
const {database} = require('../config');

const sequelize = new Sequelize(database.database, database.username, database.password, 
{host: database.host, dialect: "mysql"}) ;



//sequelize.sync().then(()=> { console.log('conexion DB OK')}).catch(error => {console.log("tenemos este error", error)})

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports= {
    sequelize
}



