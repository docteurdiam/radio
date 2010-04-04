require File.join(File.dirname(__FILE__), '..', 'factories_helper.rb')

Factory.define :valid_radio, :class => Radio do |f|
  f.name random_token(40)
  f.category "National & News"
  f.fee rand(100)
end

Factory.define :invalid_radio, :class => Radio do |f|
end

