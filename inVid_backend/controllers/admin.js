const User = require('../models/user');
const Shortfilm = require('../models/shortfilm');
const crypt = require('../util/crypt-util');
const Token = require('../auth/Token');
const jwt = require('jsonwebtoken');
const videoService = require('../services/videoService');
const voteService = require('../services/voteService');



// ------------------- TODO PARA EL /ADMIN


// -GET- CHECK ADMIN LOGIN ---> LUEGO DE COMPROBAR, RENDER DE LA PAGINA

exports.getLoginAdmin = (req, res, next) => {
    res.render('indexFilmUp', {
      pageTitle: 'Admin Area',
      path: '/admin',
      admin: false
    });
  };

// postLoginAdmin

exports.doAdminLogin = (req, res, next) => {
    const username = req.body.user_name; // attr Name = "user" en la view 
    const password = req.body.user_pass;
    User.login(username, password)
    .then(([row]) => {
        if (row.length !== 1) {
            res.send(row)
            .catch(err => console.log(err));
          } else {
            const adminlog = row[0];
            const dbPwd = adminlog.user_pass;
            const pwd = req.body.user_pass;
            const cryptPasswd = crypt.encrypt(pwd);
            const isAdmin = adminlog.user_name === "Admin";
            const isPassOk = cryptPasswd === dbPwd;
            if (isAdmin && isPassOk) {
                let token = Token.buildToken(adminlog)
                let userName = adminlog.user_name;
                let userID = adminlog.user_id;
                console.log('este es el id del usuario: ',adminlog.user_id)
                console.log('este es el pass del usuario: ',adminlog.user_pass)
                console.log(typeof password);
                console.log('Este es el token del login:  ',token);
                  res.send({ token: token, user_name: userName, user_id: userID });
                console.log(token);                
            } else {
                res.send({message: "Usuario o password incorrectos"})
                console.log('Pass encriptada: ' + cryptPasswd);
                console.log('Pass de database: ' + dbPwd);                
            }
/*
            if (cryptPasswd !== dbPwd && adminlog.user_name !== "Admin") {
                res.send({message: "Usuario o password incorrectos"})
                console.log('Pass encriptada: ' + cryptPasswd);
                console.log('Pass de database: ' + dbPwd);
            } else {
              let token = Token.buildToken(adminlog)
              let userName = adminlog.user_name;
              let userID = adminlog.user_id;
              console.log('este es el id del usuario: ',adminlog.user_id)
              console.log('este es el pass del usuario: ',adminlog.user_pass)
              console.log(typeof password);
              console.log('Este es el token del login:  ',token);
                res.send({ token: token, user_name: userName, user_id: userID });
              console.log(token);
                }
*/                
          }
            })
        .catch(err => console.log(err));
    };


exports.viewAdminPage = (req, res, next) => {
    Shortfilm.fetchAll()
        .then(([shortfilms]) => {
            console.log(shortfilms);
            res.send({
                shortfilms: shortfilms,
            });
        })
        .catch(err => console.log(err));


};


// -POST- HABILITAR LAS PELICULAS ---> ENABLE=1 ON CLICK Y MARCAR LAS YA HABILITADAS



  exports.postDisableFilm = (req, res, next) => {
    let token = req.token;
    const filmid = req.params.id;
    console.log(filmid);
    Shortfilm.disableFilm(filmid)
    .then(() => {
        return Shortfilm.fetchAll()
        .then(([shortfilms]) => {
            console.log(shortfilms);
            res.send({ 
                shortfilms: shortfilms,
            });
        });
    });
  };

  exports.postEnableFilm = (req, res, next) => {
    let token = req.token;
    const filmid = req.params.id;
    console.log(filmid);
    Shortfilm.enableFilm(filmid)
    .then(() => {
        return Shortfilm.fetchAll()
        .then(([shortfilms]) => {
            console.log(shortfilms);
            res.send({
                shortfilms: shortfilms,
            });
        });
    });
  };

  exports.postDeleteFilm = (req, res, next) => {
    let token = req.token;
    const filmid = req.params.id;
    Shortfilm.deleteById(filmid)
    .then(() => {
        return Shortfilm.fetchAll()
        .then(([shortfilms]) => {
            console.log(shortfilms);
            res.send({  
                shortfilms: shortfilms,
            });
        });
    });
};
  


