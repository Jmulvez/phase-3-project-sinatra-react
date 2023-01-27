class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    get '/movies' do
        movies = Movie.all.order(:created_at)
        movies.to_json
    end
    
    post '/movies' do
        movie = Movie.create(
            name: params[:name],
            runtime: params[:runtime],
            genre: params[:genre],
            imageUrl: params[:imageUrl],
            director_id: params[:director_id]
        )
        movie.to_json
    end

    patch '/movies/:id' do 
        movie = Movie.find(params[:id])
        movie.update(
            name: params[:name],
            runtime: params[:runtime],
            genre: params[:genre],
            imageUrl: params[:imageUrl]
        )
        movie.to_json
    end

    delete '/movies/:id' do 
        movie = Movie.find(params[:id])
        movie.destroy
    end

    get '/directors' do
        directors = Director.all.order(:name)
        directors.to_json(include: :movies)
    end

    get '/directors/:id' do
        director = Director.find(params[:id])
        director.to_json(include: :movies)
    end

    post '/directors' do
        director = Director.create(
            name: params[:name]
        )
        director.to_json
    end

    post '/directors/:id/movies' do
        movie = Movie.create(
                name: params[:name],
                runtime: params[:runtime],
                genre: params[:genre],
                imageUrl: params[:imageUrl],
                director_id: params[:id]
        )
        movie.to_json
    end

    patch '/directors/:id' do
        director = Director.find(params[:id])
        director.update(
            name: params[:name]
        )
        director.to_json
    end

    delete '/directors/:id' do
        director = Director.find(params[:id])
        director.destroy
    end

end
