var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

const multer = require('multer');

// cria uma instância do middleware configurada
const upload = multer({ dest: 'uploads/' });

// rota indicado no atributo action do formulário
router.post('/', upload.single('filetoupload'), (req, res, next) => {
  console.log(req.file);
  res.send('<h2>Upload realizado com sucesso</h2>')
});

module.exports = router;
