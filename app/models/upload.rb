class Upload

  attr_reader :original_filename
  attr_reader :new_filename
  attr_reader :absolute_path

  def save_upload(upload)
    @original_filename = sanitize_file_name(upload.original_filename)
    @new_filename = unique_filename
    @absolute_path = absolute_path
    File.open(absolute_path, "wb") { |f| f.write(upload.read) }
  end

  def absolute_path
    File.join(Rails.root, 'public/system/uploads', self.new_filename)
  end

  private

  def sanitize_file_name(filename)
    # Internet explorer returns the complete path to the file, instead of just the file name that was uploaded.
    # File.basename gives us just the filename and fixes the above issue with Internet Explorer.
    # Replace everything other than alphanumeric characters, periods or underscores with underscores to ensure
    # there are no illegal characters
    File.basename(filename).gsub(/[^\w\.\_]/, '_')
  end

  def unique_filename
    # Prepend a timestamp to the original filename to create a unique filename
    Time.now.strftime("%m%d%Y%H%M%S").to_s + "-#{self.original_filename}"
  end

end