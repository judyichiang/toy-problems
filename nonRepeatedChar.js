/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function (string) {
  var repeats = [];
  //base case
  if (
    string === undefined ||
    string.length === 0 ||
    typeof string !== "string"
  ) {
    return null;
  }
  for (var i = 0; i < string.length; i++) {
    if (
      !repeats.includes(string[i]) &&
      string.indexOf(string[i], i + 1) === -1
    ) {
      return string[i];
    } else {
      repeats.push(string[i]);
    }
  }
  return null;
};

// https://repl.it/@Kilrpanda/SourCarefulHypothesis#index.js
