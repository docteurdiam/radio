require File.join(File.dirname(__FILE__), '..', 'factories_helper.rb')

Factory.define :valid_partnership, :class => Partnership do |f|
  f.fee rand(100)
end

Factory.define :invalid_partnership, :class => Partnership do |f|
end

