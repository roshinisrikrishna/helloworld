'use strict'
const hapi = require('hapi');
// const routes = require('./router.js');
// const HapiSwagger = require('hapi-swagger');
// const Inert = require('inert');
// const Vision = require('vision');
//create a server instance and define the routes of server
const PORT=process.env.PORT;
(async () => {
    const server = hapi.server({
        port: PORT,
        host: 'localhost',
        routes: {
            "cors": true
        }
    });
    //start the server with instance init
    const init = async () => {
        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
    };
    process.on('unhandledRejection', (err) => {
        console.log(err);
        process.exit(1);
    });
    //run a swagger documentation
    // const swaggerOptions = {
    //     info: {
    //         title: 'UpdateAccount API Documentation',
    //         version: '1.0.0',
    //     },
    // };
    //initialize the plugins to be registered
    // await server.register([
    //     Inert,//serve the file from disk
    //     Vision,//adds template rendering support
    //     {
    //         plugin: HapiSwagger,
    //         options: swaggerOptions
    //     }
    // ]);
    // server.route(routes);//route all the routes from server
 init();
})();