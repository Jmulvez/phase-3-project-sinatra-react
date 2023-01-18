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
        directors.to_json(include: :movies)
    end

    get 'directors/:id' do
        director = Director.find_by(params[:id])
        director.to_json(only: [:id, :name], include: {
            movies: { only: [:name, :runtime, :genre, :imageUrl]}
        })
    end

    post '/directors' do
        director = Director.create(
            name: params[:name]
        )
        director.to_json
    end

    patch '/directors/:id' do
        directors = Director.find(params[:id])
        directors.update(
            name: params[:name]
        )
        directors.to_json
    end

    delete 'directors/:id' do
        director = Director.find_by(params[:id])
        director.destroy
        director.to_json
    end

end
