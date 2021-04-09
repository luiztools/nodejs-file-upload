var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res, next) => {
  const formidable = require('formidable');
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    const s3Client = require('../s3Client');
    const url = await s3Client.uploadFile(files.filetoupload.name, files.filetoupload.path);
    res.send(`File uploaded at ${url}`);
  });
});

module.exports = router;
