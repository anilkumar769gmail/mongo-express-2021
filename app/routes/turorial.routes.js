module.exports = app => {

  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create); 

  // Retrieve all Tutorials
  router.get("/tutorials", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/tutorials/:id", tutorials.findOne);

  // Update a Tutorial with id

  router.put("/:id", tutorials.update);
  
  // Delete a Tutorial with id
  router.delete("/:account_number", tutorials.delete);

  // Create a new Tutorial
  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router);

  app.use("/", router);
};
