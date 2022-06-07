# movie-roulette-fire-one
Heroku: https://movie-fire-one.herokuapp.com/

**How It's Made**:
Tech used: HTML, JavaScript, Express

Movie suggestion API created on JavaScript. Server created with Express, hosted on Heroku. Simple frontend interface with input forms. User enters a movie genre and a randomized movie title with the year of release is returned.

Optimizations

Would've liked to include poster images and a quick synopsis along with the title and year of release. Also would've styled it with CSS, and enlarged the database (also hosting it on MongoDB), given more time.

Lessons Learned:

initially forgot to add the slash on: 
res.sendFile(__dirname + '/main.js') 
always check file pathing
