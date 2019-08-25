# Definitely Not IMDB

# What It Is and Why We Did It

##### Most people know IMDB--you've used it to find out who that actress is in your favorite movie or look up what other shows your favorite TV actor has been in. But have you ever stopped to think how much better the site you're using could be? Well, we did, and we knew we could do it better. We knew there had to be a better way to find information about our favorite shows, movies, and celebrities. We knew we could add in more functionality and improve the services we offered.

##### What did that mean for us?

##### First it meant getting rid of that awful color scheme and placing an emphasis on mobile first design. Our application is best viewed on a mobile device but we worked hard to make it accessible on all devices. Next it meant linking everything in an intuitive way and displaying things in an easier to find format so users didn't have to go between multiple menus to find what they wanted. 

##### Next, it meant updating the technologies we used to make the site. We started by designing our app using React and chose to implement hooks and context to make it work more smoothly. We decided to use The Movie Database (TMDB) API for our data instead of using the IMDB API as we could get more information back from each query. The data in this API gave us more flexibility with our users' query format and allowed us to build a more robust app in terms of the information we offered users back when they queried our site. We use a lot of this information to help build out our own Mongo database that includes things such as comments and user ratings to improve our site functionality.

##### Lastly, we wanted to focus on what users might want or need from our site. We wanted them to be able to access information about trending movies, movies in theaters, and a watch list for movies or TV shows they want to see. Eventually, we want them to be able to see where a movie or show may be streaming (see more about this in our future enhancements section). In addition, we wanted our site to be slightly more social and have the ability for users to comment on movies/shows.


# What it Does and How It Works

##### So what exactly does our app do, both on the user side and behind the scenes?

##### Our main landing page displays articles related to current industry news. A user must log in before they are able to read the full article as the landing page offers them just a small snipet of the full text. From here, a user can select where they'd like to go using the hamburger menu on the left side of our navigation bar. 

##### The first thing we encourage our users to do is sign up. We have implemented user authentication using Passport for this site. By signing up, users access more functionality in our site, more of which is described in the applicable sections below.

##### The main use of our site is user queries from the Search page. On the search page, users and search for either a movie, TV show, or a celebrity that they are interested in to start the process rolling. This then runs a query to TMDB based on the category the user has chosen (e.g. if the user has selected Movie, it runs a query to the Movies section of TMDB) and displays the results back to them. Selecting one of these results is where our app really starts going.

##### Once a result is selected, our application runs a query to our Mongo database to see if that particular movie, television show, or celebrity are already there. If it isn't, it adds in all of the data from TMDB and creates that entry in our database. If the query object is already in our database, it updates any information that is different. This allows us to constantly have an up to date database powering our app and also allows our application to function if our database goes down for any reason as the data from TMDB can be displayed instead.

##### After our database has been updated or seeded, the application displays the information about the user's query in a clean and user-friendly format. Information about that particular movie, show, or celebrity populates using the entries from our database. Below that, we display user comments from our database. Users are unable to comment unless they are logged in. These comments stay with the object (movie, show, celebrity) regardless of how often the object is updated from user queries.

##### This page links to almost all other pages on our app; celebrities, movies, and TV shows all link to each other when populated tiles appear. Comments do not link to users, but comments are able to be flagged by users if someone thinks it is inappropriate for our site (see Future Enhancements for more). For all other linking, users can again use the hamburger button to display the menu. This links to our other main pages: Latest News (the landing page), In Theaters, Top Movies, Genres, My Watch List, and Log Out.

##### In Theaters displays movies currently out in theaters and links to the main page for that movie if selevted. This is powered by TMDB. Top Movies is also powered by TMDB and displays movies that have been popular with thier users in the past 7 days (see Future Enhancements for more information).

##### The Genres page is a different way to search for a movie you might want. It displays cards for each of the main genres TMDB defines for movies: Action, Adventure, Animation, Comedy, Crime, Documentary, Drama, Family, Fantasy, History, Horror, Music, Mystery, Romance, Science Fiction, TV Movie, Thriller, War, and Western. Selecting one of the tiles then displays a page similiar to the search page return listing multiple movies of that particular genre. Picking one of these titles links to the individual page for that movie with all of the information about it. We implemented AWS Photo Storage to store 

##### My Watch List is an option only to logged in users that displays any movies or shows they have added to their list. Adding something to a Watch List is accomplished by selecting the "+" button on the particular page about that movie or show. From My Watch List, users can remove things that they have already watched or go to the page for that particular movie/show.

##### The Logout button does just that: logs a user out of our app.

# Future Enhancements

### Admin vs. Normal Users

##### Functionality is almost completely built out to have admin users for our app. Admin users would be able to approve or deny flagged comment requests and then delete comments from the database. They would also be able to suspend users or ban users for inappropriate content or activity. However, at this time, we are not fully prepared to roll out this feature as it still has some improvements that we would like to make before having it go live.

### Articles

##### Currently we have static articles in our database to populate on the main page. During development we did not have quite enough time to work on getting articles to populate dynamically as much as we would have liked. Moving forward, we'd like to work on pulling articles from another API with relevant news stories. Ideally, this would transition us into letting our users submit articles to us that admins could then approve and publish on our site. We want to stay away from the "social media" approach of letting all users post things and make it more of a currated list of news. This wasn't something we were able to accomplish with the limited number of people on the team or the current number of users of the app, but we are looking forward to the time when this is a robust enough community to allow us this option.

### Search Page Pagination

##### TMDB allows a fairly simple way to return results limited to a certain number of items and, while this is a good start, in practice it is much more difficult to implement in our site. It is something we want to put in later, but from our initial testing we have found that our search algorithm is robust enough to capture what the user is looking for in the results returned initially. It is an important feature that we want to include sooner rather than later.

### Comment Flagging

##### Users are able to flag comments in the app for inappropriate content or behavior. Once admin users are completely implemented, they will be able to go in and delete comments that have been flagged. A new dashboard will be added ot the site for admin users to see what comments have been flagged and to either approve or deny the request for removal. Approving a flag request delets the comment from our database, and denying it allows it to stay and still show on the page for that movie, show, or celebrity. This is functionality that is tied to our implementation of admin users and, as such, will be completed upon implementation of that functionality.

### Streaming

##### In the current digital age, we want to offer options for our users to see where their favorite movies or shows are streaming. This functionality was something we wanted to implement from the beginning but, due to ineffecient time mamagement, was not able to be implemented by the developer in charge of building that out. Ideally, we'd like to use Guidebox as their system allows us the most freedom and largest list of streaming options to pull from. This is a stretch goal for our app though as this is a paid tool and we would need some type of revenue from the app to support this addition. 

##### In adition to streaming options, we'd like to offer our users the ability to see where tickets are available for movies currently in theaters. Guidebox would also allow us to offer this functionality.

### User Ratings

##### We currently have Top Rated displaying movies using information from TMDB but one thing we would like to do moving forward is display movies that our users have rated. THis involves a lot of rating systems that would need to be put into our app and while we are very passionate about providing our users this option, it is not something we have not been able to fully implement currently.

### Incentives

##### We want to offer our users more incentives to use our app than our current offerings. While we think the current options to see articles, comment on movies or shows, flag comments, and create a watch list are good offerings, we are passionate about offering them more. We'd eventually like to partner with someone like AMC or another movie theater to offer our users a discount on movie tickets if they sign up.
