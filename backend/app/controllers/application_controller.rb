class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    get '/movies' do
        movies = Movie.all.order(:created_at)
        movies.to_json
    end
    
end