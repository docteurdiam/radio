$.Controller.extend('ResultsController',
{
  init: function(el) {
    this._super(el);
  },

  "search-initiated subscribe": function(called, params) {
    this.element.find("ul").empty();
  },

  "search-complete subscribe": function(called, params) {
    var radios = params;
    var container = this.element.find("ul");
    container.empty();
    var prefix = "";
    for(var i = 0; i < radios.length; i++) {
      var radio = radios[i];
      var current_prefix = radio.name ? radio.name.substring(0, 1) : "";
      if (current_prefix != prefix && !(this.isNumeric(prefix) && this.isNumeric(current_prefix))) {
        prefix = current_prefix;
        var display = this.isNumeric(prefix) ? "0-9" : prefix;
        $('<li class="prefix">' + display + '</li>').appendTo(this.element.find("ul"));
      }
      var view = i % 2 == 0 ? "normal" : "striped";
      var note = radio.note ? "<a href='#' class='note'>INFO</a><em class='note'>" + radio.note + "</em>" : "";
      var bonded = radio.bonded ? "<a href='#' class='bonded'>BONDED</a><em class='bonded'>" + radio.bonded + "</em>" : "";
      var label = radio.name;
      if (radio.fee) label = radio.name + " - £" + radio.fee;
      $('<li class="' + view + '"><input type="checkbox" id="radio-' + radio.id + '-' + radio.type + '" value="' + radio.fee + '" /><label>'
              + label  +  '</label>' + note + bonded + '<br/></li>').appendTo(container);

      container.find("a.note").hover(function() {
        container.find("em").hide();
        var pos =  parseInt($(this).offset().left);
        $(this).next("em.note").stop(true, true).animate({opacity: "show", left: pos + 50}, "slow");
      }, function() {
        var pos =  parseInt($(this).offset().left);
        $(this).next("em.note").animate({opacity: "hide", left: pos}, "fast");
      });

      container.find("a.bonded").hover(function() {
        container.find("em").hide();
        var pos =  parseInt($(this).offset().left);
        $(this).next("em.bonded").stop(true, true).animate({opacity: "show", left: pos + 50}, "slow");
      }, function() {
        var pos = parseInt($(this).offset().left);
        $(this).next("em.bonded").animate({opacity: "hide", left: pos}, "fast");
      });
    }
  },

  "selection-cleared subscribe": function(called, params) {
      this.element.find("input").attr("checked", false);
      return false;
   },

  ".select-all click": function(el, ev) {
    this.element.find("input").attr("checked", true);
    this.selectStations(this.element.find("input:checked"), function(stations) {this.publish("station-selected", stations)}.bind(this));
    return false;
  },

  ".clear-all click": function(el, ev) {
    this.element.find("input").attr("checked", false);
    return false;
  },

  "input:checked click": function(el, ev) {
    this.selectStations(el, function(stations) {this.publish("station-selected", stations)}.bind(this));
    return false;
  },

  selectStations: function(items, callback) {
    var stations = [];
    items.each(function(index, el) {
      var rowId = $(el).attr("id");
      var info = parseIdentifier(rowId);
      var id = info["id"];
      var type = info["type"];
      if (type == "total") {
        $.getJSON("/totals/" + id + "/stations", function(data){
          for (var i = 0; i < data.length; i++) {
            var name = data[i].name;
            var identifier = "radio-" + data[i].id + "-" + data[i].type;
            stations.push([name, identifier]);
          }
          callback(stations);
        });
      }
      else
      {
        stations.push([$(el).siblings("label").text(), rowId]);
      }
    })
    callback(stations);
  },

  isNumeric: function(val) {
    return val.match(/^[0-9]+$/);
  }
});

