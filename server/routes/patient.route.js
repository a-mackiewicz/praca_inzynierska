const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const studentRoute = express.Router();
const patientRoute = express.Router();

if (!sess) {
  var sess = {};
  console.log(sess);
}

const DIR = './public/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = new mongoose.Types.ObjectId() + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1];
    cb(null, fileName)
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Tylko .png, .jpg i .jpeg'));
    }
  }
});

let PatientModel = require('../models/Patient');
let InterviewModel = require('../models/Interview');
let ExaminationModel = require('../models/Examination');
let VisitModel = require('../models/Visit');
let ReferralModel = require('../models/Referral');
let PictureModel = require('../models/Picture');
let UserModel = require('../models/User');
let SettingsModel = require('../models/Settings');

patientRoute.post('/file-upload', upload.array('files', 10), (req, res, next) => {
  const reqFiles = []
  const url = req.protocol + '://' + req.get('host')
  for (var i = 0; i < req.files.length; i++) {
    reqFiles.push(url + '/public/' + req.files[i].filename)
  }

  const user = new PictureModel({
    _id: new mongoose.Types.ObjectId(),
    patientId: req.body.patientId,
    head: req.body.head_text,
    files: reqFiles
  });
  user.save().then(result => {
    res.status(201).json({
      message: "Done upload!",
      userCreated: {
        _id: result._id,
        patientId: result.patientId,
        head: result.head_text,
        files: result.files
      }
    })
  }).catch(err => {
    console.log(err),
      res.status(500).json({
        error: err
      });
  })
})

//pictures
patientRoute.route('/pictures/:id').get((req, res) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      PictureModel.find({ patientId: req.params.id }, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
    }
  }
})

patientRoute.route('/picture/:id').get((req, res) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      PictureModel.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
    }
  }
})

patientRoute.route('/delete-picture/:id').delete((req, res, next) => {
  console.log(req.params.id);
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      PictureModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          
          if(sess){
            res.status(200).json({
              msg: data
            })
          }
        }
      })
    }
  }
})

//settings
patientRoute.route('/settings').get((req, res) => {
      SettingsModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data);
        res.json(data)
      }
    })
})

patientRoute.route('/create-settings').post((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      SettingsModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
          if(sess){
            res.json(data)
          }
      }
    })
    }
  }
})

patientRoute.route('/update-settings/:id').post((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      SettingsModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          if(sess){
            res.json(data)
            console.log('Settings successfully updated!')
          }
        }
      })
    }
  }
})

//User
patientRoute.route('/users').get((req, res) => {
    if(sess[req.cookies.user]){
      if(sess[req.cookies.user].type == 1) {
        UserModel.find({ }, {password:0},(error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data);
          res.json(data)
        }
      })
      }
    }
})



patientRoute.route('/update-user/:id').post((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      UserModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          if(sess){
          res.json(data)
          }
        }
      })
    }
  }
})

patientRoute.route('/create-user').post((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      console.log(req.body)
      UserModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          if(sess){
            res.json(data)
          }
        }
      })
    }
  }
})

patientRoute.route('/delete-user/:id').delete((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      UserModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          
          if(sess){
            res.status(200).json({
              msg: data
            })
          }
        }
      })
    }
  }
})

patientRoute.route('/login').post((req, res, next) => {
  console.log(req.body);
  UserModel.find({ login: req.body.login }, (error, data) => {
   if (error) {
      return next(error)
   } else {
     if(data[0]){
      if(data[0].password == req.body.password){
        sess[data[0].id] = {name: data[0].id, type:1}; // sess[id sesji] = nazwa użytkownika
        console.log(data[0].id);
        res.json(data[0].id)
      }
    }
  }
 })
})

patientRoute.route('/login-patient').post((req, res, next) => {
  PatientModel.find({ pesel: req.body.pesel }, (error, data) => {
   if (error) {
      return next(error)
   } else {
    console.log(data);
    if(data[0]){
      if(data[0].password == req.body.password){
        sess[data[0].id] = {name: data[0].id, type:2}; // sess[id sesji] = nazwa użytkownika
        res.json(data[0].id)
      }
    }
   }
 })
})

patientRoute.route('/logout').get((req, res) => {
      if(sess[req.cookies.user]){
        delete sess[req.cookies.user];
      }
})

//show patients
patientRoute.route('/patients', { credentials: 'include' }).get((req, res) => {
  console.log(sess)
  console.log(req.cookies.user)
    if(sess[req.cookies.user]){
      console.log(sess[req.cookies.user])
      if(sess[req.cookies.user].type == 1) {
      PatientModel.find((error, data) => {
      if (error) {
        return next(error)
      } else {
          console.log(data)
          res.json(data)
        }
      })
      }
    }
})

//patient
patientRoute.route('/patient/:id').get((req, res) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      PatientModel.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        if(sess){
        res.json(data)
        }
      }
    })
    }
  }
})

patientRoute.route('/update-patient/:id').post((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      PatientModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          if(sess){
          res.json(data)
          }
        }
      })
    }
  }
})

patientRoute.route('/create-patient').post((req, res, next) => {
  console.log(sess)
  console.log(req.body)
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      req.body.doctorId = sess[req.cookies.user].name
        PatientModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          if(sess){
            res.json(data)
          }
        }
      })
    }
  }
})

patientRoute.route('/delete-patient/:id').delete((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      PatientModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          
          if(sess){
            res.status(200).json({
              msg: data
            })
          }
        }
      })
    }
  }
})

//interview
patientRoute.route('/interview/:id').get((req, res) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      InterviewModel.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
          if(sess){
            res.json(data)
          }
      }
    })
    }
  }
})

patientRoute.route('/create-interview').post((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      InterviewModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
          if(sess){
            res.json(data)
          }
      }
    })
    }
  }
})

patientRoute.route('/update-interview/:id').post((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      InterviewModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          if(sess){
            res.json(data)
            console.log('Interview successfully updated!')
          }
        }
      })
    }
  }
})


//Examination
patientRoute.route('/examination/:id').get((req, res) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      ExaminationModel.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
          if(sess){
            res.json(data)
          }
      }
    })
    }
  }
})

patientRoute.route('/create-examination').post((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      ExaminationModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        if(sess){
          res.json(data)
        }
      }
    })
    }
  }
})

patientRoute.route('/update-examination/:id').post((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      ExaminationModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          if(sess){
            res.json(data)
            console.log('Interview successfully updated!')
          }
        }
      })
    }
  }
})

//Patient Panel
patientRoute.route('/visits-patient').get((req, res) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 2) {
      VisitModel.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        if(sess){
          console.log(data);
          res.json(data)
        }
      }
    })
    }
  }
})

patientRoute.route('/visit-patient').get((req, res) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 2) {
      VisitModel.find({ patientId: sess[req.cookies.user].name }, (error, data) => {
      if (error) {
        return next(error)
      } else {
        if(sess){
          res.json(data)
        }
      }
    })
    }
  }
})

patientRoute.route('/user-patient/:id').get((req, res) => {
    if(sess[req.cookies.user]){
      if(sess[req.cookies.user].type == 2) {
        UserModel.find({ _id: req.params.id }, { password: 0, login: 0 },(error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data);
          res.json(data)
        }
      })
      }
    }
})

patientRoute.route('/patient-patient').get((req, res) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 2) {
      PatientModel.findById(sess[req.cookies.user].name, { password: 0 },(error, data) => {
      if (error) {
        return next(error)
      } else {
        if(sess){
        res.json(data)
        }
      }
    })
    }
  }
})

//visit
patientRoute.route('/visits').get((req, res) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      VisitModel.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        if(sess){
          res.json(data)
        }
      }
    })
    }
  }
})


patientRoute.route('/visit/:id').get((req, res) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      VisitModel.find({ patientId: req.params.id }, (error, data) => {
      if (error) {
        return next(error)
      } else {
        if(sess){
          res.json(data)
        }
      }
    })
    }
  }
})

patientRoute.route('/create-visit').post((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      VisitModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        if(sess){
          res.json(data)
        }
      }
    })
    }
  }
})

patientRoute.route('/reservation-visit').post((req, res, next) => {
  req.body.patientId = sess[req.cookies.user].name
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 2) {
      VisitModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        if(sess){
          res.json(data)
        }
      }
    })
    }
  }
})

patientRoute.route('/update-visit/:id').post((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      VisitModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          if(sess){
            res.json(data)
            console.log('Interview successfully updated!')
          }
        }
      })
    }
  }
})

patientRoute.route('/delete-visit/:id').delete((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      VisitModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          if(sess){
            res.status(200).json({
              msg: data
            })
          }
        }
      })
    }
  }
})

//referral
patientRoute.route('/referral/:id').get((req, res) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      ReferralModel.find({ patientId: req.params.id }, (error, data) => {
      if (error) {
        return next(error)
      } else {
        if(sess){
          res.json(data)
        }
      }
    })
    }
  }
})

patientRoute.route('/create-referral').post((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      ReferralModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        if(sess){
          res.json(data)
        }
      }
    })
    }
  }
})

patientRoute.route('/update-referral/:id').post((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      ReferralModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          if(sess){
            res.json(data)
            console.log('Interview successfully updated!')
          }
        }
      })
    }
  }
})

patientRoute.route('/delete-referral/:id').delete((req, res, next) => {
  if(sess[req.cookies.user]){
    if(sess[req.cookies.user].type == 1) {
      ReferralModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          if(sess){
            res.status(200).json({
              msg: data
            })
          }
        }
      })
    }
  }
});


module.exports = studentRoute;
module.exports = patientRoute;