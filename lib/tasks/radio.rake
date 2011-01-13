namespace :radio do

  desc "Get regions for each radio"
  task :regions => [:environment] do
    stations = Radio.all
    stations.each do |station|
      if station.name =~ /\((.+?)\)/  
        region = $1
        next if region.match(/prev/i) 
        station.region = region
        puts region
#        station.save!
      end    
    end 
  end
end
