class EmailSender < ActionMailer::Base
  def reminder_notification(name, email, radios, total)
    recipients  "#{name} <#{email}>"
    from        "olivier.kouame@gmail.com"
    content_type    "text/html"
    subject     "Your reminder from radios"
    sent_on     Time.now
    body        :name => name, :radios => radios, :total => total
  end
end
