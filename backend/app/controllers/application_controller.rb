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
            directorName: params[:directorName],
            genreName: params[:genreName],
            imageUrl: params[:imageUrl]
        )
        movies.to_json
    end

    patch '/movies/:id' do 
        movies = Movie.find(params[:id])
        movies.update(
            name: params[:name],
            runtime: params[:runtime],
            directorName: params[:directorName],
            genreName: params[:genreName],
            imageUrl: params[:imageUrl]
        )
        movies.to_json
      end

      delete '/movies/:id' do 
        movies = Movie.find(params[:id])
        movies.destroy
        movies.to_json
      end

end