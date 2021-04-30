const {Sequelize} = require('sequelize');
const {database} = require('../config');



const sequelize = new Sequelize(database.database, database.username, database.password, 
{host: database.host, dialect: "mysql"}) ;



sequelize.sync({force: false})
.then(()=> { console.log('conexion DB OK')})
.catch(error => {console.log("tenemos este error", error)});




module.exports= sequelize



