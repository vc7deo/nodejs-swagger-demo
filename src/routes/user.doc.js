const listUsers =
    {
        tags: ["User"],
        description: "List all users",
        responses:{
            200:{
                description: "OK",
                content:{
                    "application/json":{
                        schema: {
                            type: "object",
                            example:[
                                {
                                  "_id": "62cfe8d86213e6fdfff86016",
                                  "name": "Test",
                                  "age": 0,
                                  "email": "test@email.com",
                                  "__v": 0
                                }
                              ]
                        }
                    }
                }
            }
        }
}

const createUser = {
    tags: ["User"],
    description: "Create a User",
    requestBody: {
        content:{
            "application/json":{
                schema: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            description: "Name of the user",
                            example:"John Doe"
                        },
                        age: {
                            type: "integer",
                            description: "age of the user",
                            example: 20
                        },
                        email:{
                            type: "string",
                            description: "email of the user",
                            example:"test@gmail.com"
                        }
                    }
                }
            }
        }
    },
    responses:{
        200:{
            description: "OK",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:[
                            {
                              "_id": "62cfe8d86213e6fdfff86016",
                              "name": "Test",
                              "age": 0,
                              "email": "test@email.com",
                              "__v": 0
                            }
                          ]
                    }
                }
            }
        }
    }    
}

const userRouteDoc = {
    "/users":{
        get:listUsers,
        post:createUser,
    }
}

module.exports = userRouteDoc;