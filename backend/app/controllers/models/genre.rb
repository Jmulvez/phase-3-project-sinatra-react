class Genre < ActiveRecord::Base
    has_one :movie
    has_many :directors, through :movies
end