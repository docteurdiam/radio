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
      $('<li class="' + view + '">' 
      +   '<a href="javascript:void(0)" class="selector">' 
      +     '<img src="/images/add-icon.png" id="radio-' + radio.id + '-' + radio.type + '" value="' + radio.fee + '" />' 
      +   '</a>' 
      +   '<label>'
      +     label  
      +  '</label>' 
      +  '<input type="hidden" class="type" value="' + radio.type + '">'
      +  '<input type="hidden" class="name" value="' + radio.name + '">'
      +  '<input type="hidden" class="fee" value="' + radio.fee + '">'
      +  '<input type="hidden" class="id" value="' + radio.id + '">'
      +   note + bonded 
      +  '<br/></li>').appendTo(container);

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

  ".select-all click": function(el, ev) {
		console.debug(this.element.find("a.selector img"));
    this.selectStations(this.element.find("a.selector"), function(stations) {this.publish("station-selected", stations)}.bind(this));
    return false;
  },

  "a.selector click": function(el, ev) {
    this.selectStations(el, function(stations) {this.publish("station-selected", stations)}.bind(this));
    return false;
  },

  selectStations: function(items, callback) {
    var stations = [];
    items.each(function(index, el) {
      var rowId = $(el).find("img").attr("id");
      var id = $(el).parent().find("input.id").val();
      var type = $(el).parent().find("input.type").val();
      var name = $(el).parent().find("input.name").val();
      var fee = $(el).parent().find("input.fee").val();
      if (type == "total") {
        $.getJSON("/totals/" + id + "/stations", function(data){
          for (var i = 0; i < data.length; i++) {
            var name = data[i].name;
            var identifier = "radio-" + data[i].id + "-" + data[i].type;
            stations.push([name, identifier, data[i].id, data[i].type, data[i].fee]);
          }
          callback(stations);
        });
      }
      else
      {
        stations.push([name, rowId, id, type, fee]);
      }
    })
    callback(stations);
		return false;
  },

  isNumeric: function(val) {
    return val.match(/^[0-9]+$/);
  }
});

