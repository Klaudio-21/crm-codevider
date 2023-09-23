const express = require("express");
const projectService = require("../services/projectService");
const cache = require('../middlware/cache');
const  protect  = require("../middlware/protect");


const router = express.Router();

router.route("/projects")

  .get(cache.checkCache, protect.protect, projectService.getAllProject)
  .post( projectService.createProject);

router.route("/project/:id")

  .get(cache.checkCache, protect.protect, projectService.getProject)
  .put(cache.checkCache, protect.protect, projectService.updateProject)
  .delete(cache.checkCache, protect.protect, projectService.deleteProject);


module.exports = router;