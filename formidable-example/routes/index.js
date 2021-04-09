var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res, next) => {
  const formidable = require('formidable');
  const fs = require('fs');
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {

    const path = require('path');
    const oldpath = files.filetoupload.path;
    const newpath = path.join(__dirname, '..', files.filetoupload.name);
    
    fs.renameSync(oldpath, newpath);
    res.send('File uploaded and moved!');
  });
});

module.exports = router;
