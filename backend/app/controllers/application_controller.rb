class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    get '/movies' do
        movies = Movie.all.order(:created_at)
        movies.to_json
    end
    
    post '/movies' do
        movies = Movie.create(
            name: params[:name],
            runtime: params[:runtime],
            director_id: params[:director_id],
            genre_id: params[:genre_id]
        )
        movies.to_json
        #director = Director.find_or_create()
    end
end