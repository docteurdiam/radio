var ResultsDisplay = function(element, selection) {
  this.element = $(element);
  this.selection = selection;

  var isNumeric = function(val) {
    return val.match(/^[0-9]+$/);
  }

  $(element).find(".clear-all").click(function() {
    $(element).find("input").attr("checked", false);
    return false;
  });

  $(element).find(".select-all").click(function() {
    $(element).find("input").attr("checked", true);
    $(element).find("input:checked").each(function(){
      selection.add($(this).val(), $(this).siblings("label").text(), $(this).attr("id"));
    });
    return false;
  });

  this.add = function(radios) {
    var container = this.element.find("ul");
    container.empty();
    var prefix = "";
    for(var i = 0; i < radios.length; i++) {
      var radio = radios[i];
      var current_prefix = radio.name ? radio.name.substring(0, 1) : "";
      if (current_prefix != prefix && !(isNumeric(prefix) && isNumeric(current_prefix))) {
        prefix = current_prefix;
        var display = isNumeric(prefix) ? "0-9" : prefix;
        $('<li class="prefix">' + display + '</li>').appendTo(this.element.find("ul"));
      }
      var view = i % 2 == 0 ? "normal" : "striped";
      var note = radio.note ? "<a href='#' class='note'>*</a><em>" + radio.note + "</em>" : "";
      $('<li class="' + view + '"><input type="checkbox" id="radio-' + radio.id + '-' + radio.type + '" value="' + radio.fee + '" /><label>' + radio.name + '</label>' + note + '<br/></li>').appendTo(container);

      container.find("a.note").hover(function() {
        container.find("em").hide(); 
        $(this).next("em").stop(true, true).animate({opacity: "show"}, "slow");
      }, function() {
        $(this).next("em").animate({opacity: "hide"}, "fast");
      });

    }
  };

  this.element.find("input:checked").live('click', function() {
    var info = parseIdentifier($(this).attr("id"));
    var id = info["id"];
    var type = info["type"];
    if (type == "total") {
      $.get("/totals/" + id + "/stations", function(data){
        for (var i = 0; i < data.length; i++) {
          var station = data[i];
          selection.add(station.name, "radio-" + station.id + "-" + station.type);
        }
      })
    }
    else
    {
      selection.add($(this).siblings("label").text(), $(this).attr("id"));
    }
  });

}

