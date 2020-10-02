const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (!members) {
    return false;
  }

  let name = '';
  for ( let i = 0; i < members.length; i++ ) {
    if ( typeof members[i] === 'string' ) {
      name += members[i].trim()[0].toUpperCase();
    }
  }

  name = name.split('').sort().join('');
  return name;

};
