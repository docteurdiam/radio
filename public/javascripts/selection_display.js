var SelectionDisplay = function(element) {

  var list = $(element).find("ul");

  $(element).find(".clear-all").click(function() {
    list.empty();
    $(document).trigger("selection-change");
    return false;
  });

  $(element).find(".select-all").click(function() {
    list.find("input").attr("checked", "true");
    $(document).trigger("selection-change");
    return false;
  });

  this.add = function(fee, text, id) {
    if(list.find("#" + id).length < 1) {
      $('<li><input class="selected-radio" id="' + id + '" type="checkbox" value="' + fee + '" checked="true" /><label>' + text + '</label><br/></li>').appendTo(list);
      $(document).trigger("selection-change");
    }
  }

  $(element).find(".selected-radio").live('click', function() {
    $(document).trigger("selection-change");
  });

  var gatherRadios = function() {
    var radios = [];
    list.find(".selected-radio:checked").each(function(index) {
      radios.push($(this).attr("id").substring(6));
    });
    return radios;
  };

  $(element).find(".email").click(function() {
    var lightbox = $('#lightbox');
    if (lightbox.length == 0) lightbox = $('<div id="lightbox"></div>').appendTo("body");
    var data = gatherRadios();
    lightbox.html('').load("/reminders", {radios: data}, function() {
      lightbox.dialog({
        draggable: false,
        resiable: false,
        autoOpen: false,
        modal: true,
        title: 'Send yourself a reminder email'
      });
      lightbox.dialog('open');
    });
    return false;
  });

}