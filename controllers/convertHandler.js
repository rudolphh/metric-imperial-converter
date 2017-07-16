/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  this.getNum = function(input) {

    // get the part of the string before the first letter
    var numStr = input.slice(0, input.match(/[a-z]/i).index);

    if(numStr === '') { return 1; }

    numStr = numStr.split('/');
    switch(numStr.length){
      case 1: return +numStr;
      case 2: return +numStr[0] / +numStr[1];
      default: return 'invalid number';
    }
  };

  this.getUnit = function(input) {
    var result;
    //result = input.match(/[a-zA-Z]+/g);
    //return result == null ? result : result.toString();
    result = (input.match(/[a-zA-Z]/) || []).pop();
    return result !== '' ? input.substring(input.indexOf(result), input.length) : result;
  };

  this.getReturnUnit = function(initUnit) {

    var unit = {};
    unit['gal'] = 'l';
    unit['l'] = 'gal';
    unit['lbs'] = 'kg';
    unit['kg'] = 'lbs';
    unit['mi'] = 'km';
    unit['km'] = 'mi';

    return initUnit == '' ? null : typeof unit[initUnit.toLowerCase()] !== 'undefined' ? unit[initUnit.toLowerCase()] : null;
  };

  this.spellOutUnit = function(unit) {

    var spell = {};
    spell['gal'] = 'gallons';
    spell['l'] = 'liters';
    spell['lbs'] = 'pounds';
    spell['kg'] = 'kilograms';
    spell['mi'] = 'miles';
    spell['km'] = 'kilometers';

    if(unit !== '') unit = unit.toLowerCase();

    return spell[unit];
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
             returnNum + " " + this.spellOutUnit(returnUnit);
    return result;
  };

}

module.exports = ConvertHandler;
