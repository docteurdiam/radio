def random_token(length)
  chars = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ23456789'
  token = ''
  length.times { |i| token << chars[rand(chars.length)] }
  token
end