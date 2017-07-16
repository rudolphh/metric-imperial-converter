/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  this.getNum = function(input) {

    // the part before the first letter should be a number
    var numStr = input.slice(0, input.match(/[a-z]/i).index);

    // if its not a number, default to 1
    if(numStr === '') { return 1; }

    numStr = numStr.split('/');

    switch(numStr.length){
      case 1: return +numStr;
      case 2: return +numStr[1] === 0 ? 'invalid number' : +numStr[0] / +numStr[1];
      default: return 'invalid number';
    }
  };

  this.getUnit = function(input) {

    var units = 'l gal kg lbs mi km';
    var unitStr = input.slice(input.match(/[a-z]/i).index);

    return units.indexOf(unitStr.toLowerCase()) >= 0 ? unitStr : 'invalid unit';
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

    var spell = {};
    spell['gal'] = 'gallons';
    spell['l'] = 'liters';
    spell['lbs'] = 'pounds';
    spell['kg'] = 'kilograms';
    spell['mi'] = 'miles';
    spell['km'] = 'kilometers';

    return spell[unit.toLowerCase()];
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592
    const miToKm = 1.60934;
    var result;

    if(initUnit !== null) initUnit = initUnit.toLowerCase();

    if(initUnit === 'gal') result = initNum * galToL;
    if(initUnit === 'l') result = initNum / galToL;
    if(initUnit === 'lbs') result = initNum * lbsToKg;
    if(initUnit === 'kg') result = initNum / lbsToKg;
    if(initUnit === 'mi') result = initNum * miToKm;
    if(initUnit === 'km') result = initNum / miToKm;

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " +
             returnNum.toFixed(5) + " " + this.spellOutUnit(returnUnit);
    return result;
  };

}

module.exports = ConvertHandler;
