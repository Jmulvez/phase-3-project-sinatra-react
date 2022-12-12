puts "🌱 Seeding messages..."

Director.create([
    {
        name: "Oda"
    },
    {
        name: "Steven Spielberg"
    },
    {
        name: "Martin Scorsese"
    },
    {
        name: "Christopher Nolan"
    }
])

Movie.create([
    {
        name: "Red",
        runtime: 122,
        director_name: "Oda",
        genre_name: "Anime",
        image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/One_Piece_Film_Red_Visual_Poster.jpg/220px-One_Piece_Film_Red_Visual_Poster.jpg",
        director_id: 1,
        genre_id: 1
    }
])

Genre.create([
    {
        name: "Anime"
    },
    {
        name: "Action"
    },
    {
        name: "Adventure"
    },
    {
        name: "Comedy"
    },
    {
        name: "Thriller"
    },
    {
        name: "Sci-Fi"
    },
    {
        name: "Horror"
    },
    {
        name: "Drama"
    },
    {
        name: "Romance"
    }
])

puts "✅ Done seeding!"