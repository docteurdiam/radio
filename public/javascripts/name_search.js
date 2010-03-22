var NameSearch = function(element, display) {
  var initialClick = true;
  $(element).find("input").focus(function() {
    if (initialClick) {
      $(this).val("");
      initialClick = false;
    }
  });
  $(element).find("input").keyup(function() {
    val = $(this).val();
    if (val.length > 0) {
      $.getJSON("/radios/search", {type: "name", query: $(this).val()}, function(data, textStatus) {
        display.add(data);
      })
    }
    return false;
  });
}

