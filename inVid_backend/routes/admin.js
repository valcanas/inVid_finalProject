const path = require('path');

const express = require('express');

const Token = require('../auth/Token');

//SERVICES



//CONTROLLERS
const adminController = require('../controllers/admin');
const userController = require('../controllers/user');
const shortfilmController = require('../controllers/shortfilm');
const mainController = require('../controllers/main');



const router = express.Router();

router.get('/invidapi', mainController.getIntroPage);

// raiz => GET
router.get('/invidapi/main/auth', shortfilmController.getShortfilmEnabled); //cambiado ok devuelve json videos
//by genre
router.get('/invidapi/main/auth/scifi', shortfilmController.getShortfilmEnabledScifi); //cambiado ok devuelve json videos
router.get('/invidapi/main/auth/fantasy', shortfilmController.getShortfilmEnabledFantasy); //cambiado ok devuelve json videos
router.get('/invidapi/main/auth/horror', shortfilmController.getShortfilmEnabledHorror); //cambiado ok devuelve json videos
router.get('/invidapi/main/auth/animation', shortfilmController.getShortfilmEnabledAnimation); //cambiado ok devuelve json videos
//by movie ID
router.get('/invidapi/main/auth/movie/:id', shortfilmController.getShortfilmByID); //cambiado ok devuelve json video by id

router.post('/invidapi/main/auth/login', userController.doUserLogin); //cambiado, en error send json peliculas pagina principal, en success send token y username
router.get('/invidapi/main/auth/voting/results', shortfilmController.getAllVotes);
router.get('/invidapi/main/auth/voting/:token', Token.verifyParam, shortfilmController.votefilmEnabled);
router.post('/invidapi/main/auth/voting/:token', Token.verifyParam, userController.voteVideo);



//router.get('/main/auth/result/:token', Token.verifyParam, shortfilmController.findVotes);
// /upload => POST


router.get('/invidapi/register', userController.fillUserRegister); //ok
router.post('/invidapi/register/post', userController.saveNewUser); //ok
router.get('/invidapi/main/user/movies/:id', userController.getShortfilmByUserId); //cambiado ok devuelve json video by id
router.get('/invidapi/register/upload/:token', Token.verifyParam, userController.fillFormToAddFilm); //ok
router.post('/invidapi/register/upload/:token', Token.verifyParam, userController.saveAddedFilm); //ok
router.post('/invidapi/search/shortfilm', shortfilmController.searchShortfilms); //ok




// /user => GET/POST
router.get('/invidapi/admin', adminController.getLoginAdmin); //ok
router.post('/invidapi/admin/film/', adminController.doAdminLogin); //ok
router.get('/invidapi/admin/allfilms/:token', Token.verifyParam, adminController.viewAdminPage);
router.post('/invidapi/admin/film/delete/:id/auth/:token', Token.verifyParam, adminController.postDeleteFilm); //ok
router.post('/invidapi/admin/film/enable/:id/auth/:token', Token.verifyParam, adminController.postEnableFilm); //ok
router.post('/invidapi/admin/film/disable/:id/auth/:token', Token.verifyParam, adminController.postDisableFilm); //ok


module.exports = router; 