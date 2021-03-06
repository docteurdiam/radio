# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110112232055) do

  create_table "adverts", :force => true do |t|
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "networks", :force => true do |t|
    t.string  "name"
    t.decimal "fee"
    t.text    "note"
  end

  create_table "partnerships", :force => true do |t|
    t.decimal "fee"
  end

  create_table "radios", :force => true do |t|
    t.string  "name"
    t.string  "category"
    t.decimal "fee"
    t.text    "info"
    t.integer "total_id"
    t.integer "network_id"
    t.text    "note"
    t.integer "partnership_id"
    t.string  "region"
  end

  add_index "radios", ["category"], :name => "index_radios_on_category"
  add_index "radios", ["name"], :name => "index_radios_on_name"
  add_index "radios", ["network_id"], :name => "index_radios_on_network_id"
  add_index "radios", ["partnership_id"], :name => "index_radios_on_partnership_id"
  add_index "radios", ["total_id"], :name => "index_radios_on_total_id"

  create_table "sessions", :force => true do |t|
    t.string   "session_id", :null => false
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sessions", ["session_id"], :name => "index_sessions_on_session_id"
  add_index "sessions", ["updated_at"], :name => "index_sessions_on_updated_at"

  create_table "totals", :force => true do |t|
    t.string  "name"
    t.text    "note"
    t.decimal "fee"
  end

  create_table "users", :force => true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "login",                            :null => false
    t.string   "crypted_password",                 :null => false
    t.string   "password_salt",                    :null => false
    t.string   "persistence_token",                :null => false
    t.integer  "login_count",       :default => 0, :null => false
    t.datetime "last_request_at"
    t.datetime "last_login_at"
    t.datetime "current_login_at"
    t.string   "last_login_ip"
    t.string   "current_login_ip"
  end

  add_index "users", ["last_request_at"], :name => "index_users_on_last_request_at"
  add_index "users", ["login"], :name => "index_users_on_login"
  add_index "users", ["persistence_token"], :name => "index_users_on_persistence_token"

end
