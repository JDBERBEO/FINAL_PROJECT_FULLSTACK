/* eslint-disable no-console */
const Project = require('../Models/project.model');

const getProjects = async (req, res) => {
  try {
    console.log('req.payload', req.payload);
    const projects = await Project.find({ createdBy: req.payload });

    res.send(projects);
  } catch (error) {
    console.error(error);
  }
};
const createProject = async (req, res) => {
  const { name } = req.body;

  const project = {
    name,
    createdBy: req.payload,
  };
  const newProject = new Project(project);
  const projectSaved = await newProject.save();
  res.send(projectSaved);
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.findByIdAndDelete(id);
    res.redirect('/projects');
  } catch (error) {
    console.log(error);
  }
};

// const  getProject = async (req,res) => {
//   const { id } = req.params;
//   const task = await Poll.findById(id);
//   res.render('editForm', task);
// };

const editProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;
    await Project.findByIdAndUpdate(id, { name, description });
    console.log(req.body);
    res.redirect('/projects');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProjects, createProject, deleteProject, editProject,
};
