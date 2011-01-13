$.Controller.extend('SelectionController',
{
  init: function(el) {
    this._super(el);
    this.tablesorter_active = false;
    this.list = this.element.find("ul");
    this.table = this.element.find("table tbody");
  },

  ".clear-all click": function() {
    this.table.empty();
    this.raiseSelectionChange();
    this.publish("selection-cleared");
    return false;
  },
  
  "station-selected subscribe": function(called, params) {
    var newStationAdded = false;
    for(var i = 0; i < params.length; i++) {
      var name = params[i][0];
      var identifier = params[i][1];
      var id = params[i][2];
      var type = params[i][3];
      var fee = parseInt(params[i][4]).toFixed(2);
      if(this.table.find("#" + identifier).length < 1) {
       $('<tr>' 
        +   '<td class="icon">' 
        +     '<a href="javascript:void(0)" class="remove-station">' 
        +       '<img id="' + identifier + '" class="selected-radio" src="/images/minus_small_circle.png"/>' 
        +     '</a>'
        +   '</td>'
        +   '<td>' 
        +     '<a href="javascript:void(0)" class="remove-station">' 
        +     '<label>' + name + '</label>' 
        +     '</a>'
        +     '<br/>' 
        +   '</td>' 
        +   '<td class="fee">£' 
        +     fee
        +   '</td>'
        + '</tr>').appendTo(this.table);
        newStationAdded = true;
      }
    }
    if (newStationAdded) {
      this.raiseSelectionChange();
      if (!this.tablesorter_active) {
        this.table.parent().tablesorter({sortList: [[2,1]]});  
        this.tablesorter_active = true;
      }
      else
      {
        this.table.parent().trigger("update");         
        this.table.parent().trigger("sorton",[[[2,1]]]); 
      }
    }
  },

  "table a.remove-station click": function(el, ev) {
    $(el).parent().parent().remove();
    this.raiseSelectionChange();
    return false;
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
    this.publish("selection-change", this.findSelectedStations());
  },

  findSelectedStations: function() {
    var radios = [];
    this.table.find(".selected-radio").each(function(index) {
      radios.push($(this).attr("id").substring(6));
    });
    return radios;
  }

});
