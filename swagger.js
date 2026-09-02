const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Leopard API",
      version: "1.0.0",
      description: "API documentation for the Leopard API",
    },
    servers: [
      {
        url: "http://localhost:5003",
      },
    ],
  },

  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;