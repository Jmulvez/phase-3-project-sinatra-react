class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.integer :runtime
      t.string :director_name
      t.string :genre_name
      t.string :image_url
      t.integer :director_id
      t.integer :genre_id
    end
  end
end