const { Router } = require('express');

const router = Router();

const {
  getProjects, createProject, deleteProject, editProject,
} = require('../controllers/projects.controllers');
const { authMiddleware } = require('../helpers/authMiddleware');

router.get('/projects', authMiddleware, getProjects);
router.post('/projects', authMiddleware, createProject);
router.delete('/projects/:id', deleteProject);
router.put('/projects/:id', editProject);

module.exports = router;
