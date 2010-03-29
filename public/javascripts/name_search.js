var NameSearch = function(element, display) {
  var initialClick = true;
  $(element).find("input.partial").focus(function() {
    if (initialClick) {
      $(this).val("");
      initialClick = false;
    }
  });

  $(element).find("input").focus(function() {
    $(document).trigger("search-initiated");
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

  $(document).bind("search-initiated", function() {
    if (!initialClick) $(element).find("input.partial").val("");
  });
}

