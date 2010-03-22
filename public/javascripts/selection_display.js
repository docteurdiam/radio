var SelectionDisplay = function(element) {
  var list = $(element);
  this.add = function(id, text) {
    $('<li><input type="checkbox" value="' + id + '" checked="true" /><label>' + text + '</label><br/></li>').appendTo(list);
  }
}