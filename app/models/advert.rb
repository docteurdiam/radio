class Advert < ActiveRecord::Base
  has_attached_file :image, :styles => { :normal => "900x150!"},
                    :storage => :s3,
                    :s3_credentials => "#{RAILS_ROOT}/config/s3.yml",
                    :path => ":attachment/:id/:style.:extension",
                    :bucket => 'radiousage'
end