class Movie < ActiveRecord::Base
    belongs_to :director
    belongs_to :genre
    def new_movie
        movie = self.create(movie.name)
        director = Director.find_or_create_by(director.name)
        genre = Genre.find_or_create_by(genre.name)
        movie.director_id = director.id
        movie.genre_id = genre.id
        movie.save
      end
end