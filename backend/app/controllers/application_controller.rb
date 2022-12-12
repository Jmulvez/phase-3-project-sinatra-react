class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    get '/movies' do
        movies = Movie.all.order(:created_at)
        movies.to_json
    end
    
    post '/movies' do
        #find director using find_by director_name
        movies = Movie.create(
            name: params[:name],
            runtime: params[:runtime],
            director_name: params[:director_name],
            genre_name: params[:genre_name]
        )
        movies.to_json
        #director = Director.find_or_create()
    end

    patch '/movies/:id' do 
        movies = Movie.find(params[:id])
        movies.update(
            name: params[:name],
            runtime: params[:runtime],
            director_name: params[:director_name],
            genre_name: params[:genre_name]
        )
        messages.to_json
      end

      delete '/movies/:id' do 
        movies = Movie.find(params[:id])
        movies.destroy
        movies.to_json
      end

end