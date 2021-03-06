# encoding: UTF-8
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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140818191739) do

  create_table "categories", force: true do |t|
    t.string  "name"
    t.integer "priority"
  end

  create_table "employees", force: true do |t|
    t.string   "name"
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "groups", force: true do |t|
    t.string   "name"
    t.string   "description"
    t.integer  "category_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "groups", ["category_id"], name: "index_groups_on_category_id", using: :btree

  create_table "memberships", force: true do |t|
    t.integer "employee_id"
    t.integer "group_id"
    t.boolean "coordinator", default: false
  end

  add_index "memberships", ["employee_id"], name: "index_memberships_on_employee_id", using: :btree
  add_index "memberships", ["group_id"], name: "index_memberships_on_group_id", using: :btree

end
