# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV["RAILS_ENV"] ||= 'test'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'

Dir[Rails.root.join("spec/support/**/*.rb")].each {|f| require f}

RSpec.configure do |config|
  config.mock_with :rspec
  config.fixture_path = "#{::Rails.root}/spec/fixtures"
  config.use_transactional_fixtures = true
end

def route_matches(path, method, params)
  it "maps #{params.inspect} to #{path.inspect}" do
    route_for(params).should == {:path => path, :method => method}
  end

  it "generates params #{params.inspect} from #{method.to_s.upcase} to #{path.inspect}" do
    params_from(method.to_sym, path).should == params
  end
end
