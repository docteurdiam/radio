include.resources("bind", "common");
include.plugins('controller','view');

include(function(){
  include.controllers('alphabetical_search', 'name_search', 'type_search', 'results', 'selection', 'estimator');
  include.views();
});