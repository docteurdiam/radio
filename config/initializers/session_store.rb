# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_radio_session',
  :secret      => '7f4920bb291121cb5366a65075647807f62fe3bf6f6ff42a73c992f63087ae6981fbe9196c2f2d5ec061d2add1b87cda7f310512d2b1fee370d455a6de4a7de6'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
