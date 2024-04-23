const routes = require("express").Router();
const lesson1Controller = require("../controllers/lesson1");

routes.get("/", lesson1Controller.helloRoute);
routes.get("/hi-there", lesson1Controller.hiThereRoute);
routes.get("/alvaro", lesson1Controller.alvaroRoute);

module.exports = routes;
