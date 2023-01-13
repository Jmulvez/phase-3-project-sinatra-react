class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.integer :runtime
      t.string :genre
      t.string :imageUrl
    end
  end
end