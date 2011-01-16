class EmailSender < ActionMailer::Base
  def reminder_notification(name, email, radios, total, messages)
    recipients  "#{name} <#{email}>"
    from        "info@radiousage.co.uk"
    content_type    "text/html"
    subject     "Your reminder from radio Equity usage calculator"
    sent_on     Time.now
    body        :name => name, :radios => radios, :total => total, :messages => messages
  end
end
