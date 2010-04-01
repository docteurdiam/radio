var parseIdentifier = function(identifier) {
  var parts = identifier.split("-");
  return {id: parts[1], type: parts[2]};
}