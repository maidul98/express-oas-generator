const express = require('express');
const bodyParser = require('body-parser');
const generator = require('./index.js');

const app = express();
generator.init(app, {});

app.use(bodyParser.json({}));
let router = express.Router();
router.route('/foo/stranger')
      .get(function (req, res, next) {
        //code here
        console.log('calling /foo/stranger');
        res.json({message: 'hello stranger'});
        return next();
      });
router.route('/foo/:name')
      .get(function (req, res, next) {
        console.log('calling /foo/:name');
        res.json({message: 'hello ' + req.params.name});
        return next();
      });
app.use(router);
app.set('port', 8080);
app.listen(app.get('port'));