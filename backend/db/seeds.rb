puts "🌱 Seeding messages..."

red = Movie.create(name: 'Red', runtime: 123)

oda = Director.create(name: 'oda')

anime = Genre.create(name: 'anime')

red.director = oda

oda.movies << red

anime.movies << red

puts "✅ Done seeding!"