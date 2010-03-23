class EmailSender < ActionMailer::Base
  def reminder_notification(name, email, radios)
    recipients  "#{name} <#{email}>"
    from        "Radios"
    subject     "Your reminder from radios"
    sent_on     Time.now
  end
end
