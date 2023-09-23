const Project = require("../models/project");
const catchAsyn = require("../middlware/catchAsync");
const AppError = require('../utils/AppError');
const redisClient = require('../config/redisClient');
const dataTools = require("../utils/dataTools");



exports.getAllProject = catchAsyn(async (req, res) => {
  const dataHandler = new dataTools(Project.find(), req.query);

dataHandler.filter().sort().limitFields().paginate();

const projectsQuery = Project.find(dataHandler.query._condition);
const totalProjects = await projectsQuery.countDocuments();

const projects = await dataHandler.query.exec(); 

const cacheKey = `all_projects:${JSON.stringify(req.query)}`;
const cachedData = await redisClient.get(cacheKey);



const statusCount = await Project.aggregate([
  { $group: {_id:'$status', count:{ $sum : 1 } } }
])



  if (cachedData) {
    const cachedResponse = JSON.parse(cachedData);
    res.status(200).json({
      status: 'success',
      total: cachedResponse.total,
      result: cachedResponse.result,
      statusCount: cachedResponse.statusCount,
      data: cachedResponse.data,
    });
    console.log('Data retrieved from Redis cache');
  } else {
    const responseData = {status: 'success', total: totalProjects, result: projects.length, statusCount: statusCount, data: projects};
    await redisClient.setex(cacheKey, 300, JSON.stringify(responseData));
    res.status(200).json(responseData);
    console.log('Data retrieved from MongoDB');
  }
});



exports.getProject = catchAsyn(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return res.status(404).json({ status: "fail", message: "Project not found" });
  }
  await redisClient.setex(`project_${req.params.id}`, 300, JSON.stringify(project));
  res.status(200).json({ status: "success", data: project });
  console.log('Project:',project.name)
});

exports.createProject = catchAsyn(async (req, res) => {
  const newProject = await Project.create(req.body);
  const projects = await Project.find(); 
  await redisClient.setex('all_projects', 300, JSON.stringify(projects));
  res.status(201).json({ status: "success", data: newProject });
  console.log("Created new project")
});

exports.updateProject = catchAsyn(async (req, res) => {
  const updateProject = await Project.findByIdAndUpdate( req.params.id, req.body, { 
    new: true, 
    runValidators: true 
  });
  if (!updateProject) {
    return res.status(404).json({ status: "fail", message: "Project not updated" });
  }
  await redisClient.del(`project_${req.params.id}`);
  res.status(200).json({ status: "success", data: { project: updateProject } });
  console.log("Updated project")
});

exports.deleteProject = catchAsyn(async (req, res) => {
  const deleteProject = await Project.findByIdAndDelete(req.params.id);
  if (!deleteProject) {
    return res.status(404).json({ status: "fail", message: "Project Not Deleted" });
  }
  await redisClient.del(`client_${req.params.id}`);
  res.status(200).json({ status: "success", data: null });
  console.log("Deleted project")
});