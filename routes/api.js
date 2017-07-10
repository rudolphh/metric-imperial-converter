/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);

      if(!initNum) initNum = 1;
      else if (initNum.length === 1) initNum = eval(initNum[0]);
      else if (initNum.length === 2){
        initNum = initNum[0]/initNum[1];
      }

      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);

      if(!returnUnit && !initNum){
        res.send('invalid number and unit');
      } else if (!returnUnit) {
        res.send('invalid unit');
      } else if (!initNum){
        res.send('invalid number');
      } else {
        var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

        res.json({
          initNum: initNum,
          initUnit: initUnit,
          returnNum: returnNum,
          returnUnit: returnUnit,
          string: toString
        });
      }

    });

};
