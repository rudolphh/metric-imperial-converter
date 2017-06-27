/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  this.getNum = function(input) {
    var result;
    result = input.match(/\d+([\/.]\d+)?/g).toString();
    return result;
  };

  this.getUnit = function(input) {
    var result;
    result = input.match(/[a-zA-Z]+/g).toString();
    return result;
  };

  this.getReturnUnit = function(initUnit) {

    var unit = {};
    unit['gal'] = 'l';
    unit['l'] = 'gal';
    unit['lbs'] = 'kg';
    unit['kg'] = 'lbs';
    unit['mi'] = 'km';
    unit['km'] = 'mi';

    return unit[initUnit.toLowerCase()];
  };

  this.spellOutUnit = function(unit) {
    var result;

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592
    const miToKm = 1.60934;
    var result;

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };

}

module.exports = ConvertHandler;
