function booleanChange(name) {
  if (name === "false") {
    return false;
  } else if (name === "true") {
    return true;
  } else {
    return name;
  }
}

module.exports = {
  booleanChange,
};
