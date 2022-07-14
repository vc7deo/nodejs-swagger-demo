const userRouteDoc = require("../routes/user.doc");

const swaggerDocumentation = {
    openapi: "3.0.0",
    info:{
        title: "Swagger Demo",
        version: "1:0:0",
        description: "Swagger demo for api doc."
    },
    basePath: "/api",
    servers:[
        {
            url: "http://localhost:9000/api",
            description: "Local development server"
        },
        {
            url: "https://production.com/api",
            description: "Production development server"
        }
    ],
    
    tags: [
        {
            name: "User",
            description: "User api collection"
        }
    ],
    paths:{
       ...userRouteDoc,
    }
}
module.exports = swaggerDocumentation;