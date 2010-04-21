$.Controller.extend('SelectionController',
{
  init: function(el) {
    this._super(el);
    this.list = this.element.find("ul");
  },

  ".clear-all click": function() {
    this.list.empty();
    this.raiseSelectionChange();
    this.publish("selection-cleared");
    return false;
  },

  ".select-all click": function() {
    this.list.find("input").attr("checked", "true");
    this.raiseSelectionChange();
    return false;
  },

  "station-selected subscribe": function(called, params) {
    var newStationAdded = false;
    for(var i = 0; i < params.length; i++) {
      var text = params[i][0];
      var id = params[i][1];
      if(this.list.find("#" + id).length < 1) {
        $('<li><input class="selected-radio" id="' + id + '" type="checkbox" checked="true" /><label>' + text + '</label><br/></li>').appendTo(this.list);
        newStationAdded = true;
      }
    }
    if (newStationAdded) this.raiseSelectionChange();
  },

  ".selected-radio click": function(el, ev) {
    this.raiseSelectionChange();
  },

  ".email click": function(el, ev) {
    var data = this.findSelectedStations();
    if (data.length < 1) return false;
    var lightbox = $('#lightbox');
    if (lightbox.length == 0) lightbox = $('<div id="lightbox"></div>').appendTo("body");
    lightbox.html('').load("/reminders", {"radios[]": data}, function() {
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
  },

  raiseSelectionChange: function() {
    this.publish("selection-change", this.findSelectedStations())
  },

  findSelectedStations: function() {
    var radios = [];
    this.list.find(".selected-radio:checked").each(function(index) {
      radios.push($(this).attr("id").substring(6));
    });
    return radios;
  }

});