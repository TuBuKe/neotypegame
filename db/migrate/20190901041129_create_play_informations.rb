class CreatePlayInformations < ActiveRecord::Migration[5.0]
  def change
    create_table :play_informations do |t|
      t.time :cleat_time
      t.references :user, foreign_key: true, null: false
      t.timestamps
    end
  end
end
