const http = require("http");
const codecClass = require('./codec');
require('dotenv').config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE , process.env.DBUSER , process.env.PASSWORD ,{
    host : 'localhost',
    dialect : 'mysql'
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
const PORT = 3000;
const httpserver = async function(req , res){
    res.writeHead(200);
    let codec = new codecClass();
    tiny_url = await codec.encode(19158);
    let primary_id = await codec.decode(tiny_url);
    res.end(`this is tiny url ${tiny_url} and this is is ${primary_id} `);
}

const server = http.createServer(httpserver);

server.listen(PORT , function(){
    console.log(`Node server running on port ${PORT}`);
})