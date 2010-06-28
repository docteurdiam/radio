describe Upload do

  it "should be able to save an upload with an unique name generated by using a timestamp" do

    uploaded_file = mock(ActionController::UploadedStringIO).as_null_object
    uploaded_file.stub!(:original_filename).and_return('test.doc')
    uploaded_file.stub!(:read).and_return("Some content")

    document = Upload.new

    document.save_upload(uploaded_file)
    document.original_filename.should == "test.doc"
    document.new_filename.should =~ /\d{2}\d{2}\d{4}\d{2}\d{2}\d{2}-test.doc/

    File.exist?("#{Rails.root}/tmp/#{document.new_filename}").should == true
    File.open("#{Rails.root}/tmp/#{document.new_filename}", "r") { |f| f.read.should == uploaded_file.read }
  end

end