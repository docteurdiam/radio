$.Controller.extend('ResultsController',
{
  init: function(el) {
    this._super(el);
    this.container = this.element.find("ul")
  },

  "search-initiated subscribe": function(called, params) {
    this.container.empty(); 
  },
  
  "search-started subscribe": function(called, params) {
    this.container.empty();
    $("<li style='text-align: center'><img style='margin-top: 100px' src='/images/ajax-loader.gif' /></li>").appendTo(this.container);
  },

  "search-complete subscribe": function(called, params) {
    var radios = params;
    var container = this.container;
    container.empty();
    var prefix = "";
    for(var i = 0; i < radios.length; i++) {
      var html = "";      
      var radio = radios[i];
      var current_prefix = radio.name ? radio.name.substring(0, 1) : "";
      if (current_prefix != prefix && !(this.isNumeric(prefix) && this.isNumeric(current_prefix))) {
        prefix = current_prefix;
        var display = this.isNumeric(prefix) ? "0-9" : prefix;
        html = html + '<li class="prefix">' + display + '</li>';
      }
      var view = i % 2 == 0 ? "normal" : "striped";
      var note = radio.note ? "<a href='#lblStationInfo' class='note' rel='facebox'>INFO</a>" : "";
      var bonded = radio.bonded ? "<a href='#lblStationInfo' rel='facebox' class='bonded'>BONDED</a>" : "";
      var label = radio.name;
      if (radio.fee && parseInt(radio.fee) > 0) label = radio.name + " - £" + parseInt(radio.fee).toFixed(2);
      html = html + '<li class="' + view + '">' 
      +   '<a href="javascript:void(0)" class="selector">' 
      +     '<img src="/images/add-icon.png" id="radio-' + radio.id + '-' + radio.type + '" value="' + radio.fee + '" />' 
      +   '<label>'
      +     label  
      +  '</label>'
      +   '</a>'  
      +  '<input type="hidden" class="type" value="' + radio.type + '">'
      +  '<input type="hidden" class="name" value="' + radio.name + '">'
      +  '<input type="hidden" class="fee" value="' + radio.fee + '">'
      +  '<input type="hidden" class="id" value="' + radio.id + '">'
      +  '<input type="hidden" class="bonded" value="' + radio.bonded + '">'
      +  '<input type="hidden" class="bonded_fee" value="' + radio.bonded_fee + '">'      
      +  '<input type="hidden" class="note" value="' + radio.note + '">'      
      +   note + bonded 
      +  '<br/></li>';
      $(html).appendTo(container);
    }
    container.find("a.note").click(function() {
      var text = $(this).parent().find("input.note").val();     
      jQuery.facebox(text);   
    });
    container.find("a.bonded").click(function() {
      var bonded_station = $(this).parent().find("input.bonded").val();     
      var bonded_fee = $(this).parent().find("input.bonded_fee").val();   
      var name = $(this).parent().find("input.name").val();        
      var text = "If both " + name + " and " + bonded_station + " are selected, they will be available at the combined price of £" + bonded_fee;     
      jQuery.facebox(text);    
    });
  },

  ".select-all click": function(el, ev) {
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
      var a = $(el);
      var li = a.parent();
      li.find("label").css({color: "#878787"});
      var rowId = a.find("img").attr("id");
      var id = li.find("input.id").val();
      var type = li.find("input.type").val();
      var name = li.find("input.name").val();
      var fee = li.find("input.fee").val();
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

