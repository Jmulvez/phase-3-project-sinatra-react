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
            genre: params[:genre],
            imageUrl: params[:imageUrl]
        )
        movies.to_json
    end

    patch '/movies/:id' do 
        movies = Movie.find(params[:id])
        movies.update(
            name: params[:name],
            runtime: params[:runtime],
            genre: params[:genre],
            imageUrl: params[:imageUrl]
        )
        movies.to_json
    end

    delete '/movies/:id' do 
        movies = Movie.find(params[:id])
        movies.destroy
        movies.to_json
    end

    get '/directors' do
        directors = Director.all.order(:name)
        directors.to_json
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
        directors = Director.find(params[:id])
        directors.update(
            name: params[:name]
        )
        directors.to_json
    end

    delete '/directors/:id' do
        directors = Director.find(params[:id])
        directors.destroy
        directors.to_json
    end

end
