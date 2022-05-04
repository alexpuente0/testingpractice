const capitalize = (string3) => {
  let letter = string3.charAt(0).toUpperCase();
  let rest = string3.slice(1);

  return letter+rest
}

module.exports = capitalize