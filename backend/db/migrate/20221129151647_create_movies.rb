class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.integer :runtime
      t.string :directorName
      t.string :genreName
      t.string :imageUrl
      t.integer :director_id
      t.integer :genre_id
    end
  end
end