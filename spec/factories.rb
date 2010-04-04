require 'factory_girl'

Dir[File.join(File.dirname(__FILE__), 'factories') + "/*"].each do |file|
  require file
end