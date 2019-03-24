const User = require('../models/user');
const Shortfilm = require('../models/shortfilm');
const videoService = require('../services/videoService');
const voteService = require('../services/voteService');


exports.getShortfilmEnabled = (req, res, next) => {
  let token = req.params.token;
    Shortfilm.findEnabled()
      .then(([shortfilms]) => {
        res.send({shortfilms: shortfilms, token: token});
      })
      .catch(err => console.log(err));
  };

  exports.getShortfilmEnabledScifi = (req, res, next) => {
    let token = req.params.token;
      Shortfilm.findEnabledScifi()
        .then(([shortfilms]) => {
          res.send({shortfilms: shortfilms, token: token});
        })
        .catch(err => console.log(err));
    };

  exports.getShortfilmEnabledFantasy = (req, res, next) => {
    let token = req.params.token;
      Shortfilm.findEnabledFantasy()
        .then(([shortfilms]) => {
          res.send({shortfilms: shortfilms, token: token});
        })
        .catch(err => console.log(err));
    };

  exports.getShortfilmEnabledHorror = (req, res, next) => {
    let token = req.params.token;
      Shortfilm.findEnabledHorror()
        .then(([shortfilms]) => {
          res.send({shortfilms: shortfilms, token: token});
        })
        .catch(err => console.log(err));
    };

  exports.getShortfilmEnabledAnimation = (req, res, next) => {
    let token = req.params.token;
      Shortfilm.findEnabledAnimation()
        .then(([shortfilms]) => {
          res.send({shortfilms: shortfilms, token: token});
        })
        .catch(err => console.log(err));
    };

  exports.getShortfilmByID = (req, res, next) => {
    let token = req.token;
    const filmid = req.params.id;
    Shortfilm.findById(filmid)
    .then(([shortfilms]) => {
      res.send({shortfilms: shortfilms, token: token});
    })
    .catch(err => console.log(err));
  }; 


  exports.votefilmEnabled = (req, res, next) => {
    let token = req.params.token;
      Shortfilm.findEnabled()
        .then(([shortfilms]) => {
          res.render('votes', {
            token: token,       
            user: true,  
            credentials: true, 
            shortfilms: shortfilms,
          });
        })
        .catch(err => console.log(err));
    };

    exports.getMostVoted = (req, res, next) => {
      let token = req.params.token;
      voteService.findMostVoted()
      .then( result => { 
        res.send(result);
        console.log(result); 
      })
      .catch(err => console.log(err));    
    };
  
    exports.getAllVotes = (req, res, next) => {
      voteService.findAll()
      .then( result => { 
        res.send(result);
        console.log(result); 
      } )
      .catch(err => console.log(err));    
    };

    exports.searchShortfilms = (req, res, next) => {
      let searchInput = req.body.searchInput;
      console.log(typeof searchInput);
        Shortfilm.searchFilm(searchInput)
          .then(([shortfilms]) => {
            console.log(shortfilms);
            res.send(shortfilms);
          })
          .catch(err => console.log(err));
      };
  

