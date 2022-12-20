puts "🌱 Seeding messages..."

Director.create([
    {
        name: "Eiichiro Oda"
    },
    {
        name: "Steven Spielberg"
    },
    {
        name: "Martin Scorsese"
    },
    {
        name: "Christopher Nolan"
    },
    {
        name: "Joseph Kosinski"
    },
    {
        name: "Matt Bettinelli-Oplin"
    },
    {
        name: "Jeff Tremaine"
    },
    {
        name: "Tommy Wirkola"
    }
])

Movie.create([
    {
        name: "One Piece Film: Red",
        runtime: 115,
        directorName: "Eiichiro Oda",
        genreName: "Anime",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/One_Piece_Film_Red_Visual_Poster.jpg/220px-One_Piece_Film_Red_Visual_Poster.jpg",
        director_id: 1,
        genre_id: 1
    },
    {
        name: "Top Gun: Maverick",
        runtime: 130,
        directorName: "Joseph Kosinski",
        genreName: "Action",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg",
        director_id: 5,
        genre_id: 2
    },
    {
        name: "Scream VI",
        runtime: 114,
        directorName: "Matt Bettinelli-Oplin",
        genreName: "Horror",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c9/Scream_VI_poster.jpg",
        director_id: 6,
        genre_id: 7
    },
    {
        name: "Jackass Forever",
        runtime: 96,
        directorName: "Jeff Tremaine",
        genreName: "Comedy",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e4/Jackass_Forever_film_poster.png",
        director_id: 7,
        genre_id: 4
    },
    {
        name: "Violent Night",
        runtime: 112,
        directorName: "Tommy Wirkola",
        genreName: "Comedy",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/17/Violent_Night.png",
        director_id: 8,
        genre_id: 4
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