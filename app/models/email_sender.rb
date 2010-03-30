class EmailSender < ActionMailer::Base
  def reminder_notification(name, email, radios, total)
    recipients  "#{name} <#{email}>"
    from        "olivier.kouame@gmail.com"
    subject     "Your reminder from radios"
    sent_on     Time.now
  end
end
