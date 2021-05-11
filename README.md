# Icelander - GA Project Three.

## Brief

Third project for the Software Engineering Immersive course. Group project teammates: Karen Kaur, Patrick Johnson, Jahnvi Patel. Requirements of the project: 

Build a full-stack application by making your own back-end and the front-end with React.
Use an Express API to serve your data from a Mongo database.
Implement CRUD functionality
Create an MVP and wireframe effectively to help create a realistic scope for the project.

## Deployment

App has been deployed with Netlify can be viewed here: [Icelander](https://icelander.netlify.app/)

## Technologies Used

### Backend

* Node.js
* MongoDB
* Mongoose
* Express
* JWT
* Bcrypt

### Frontend

* React Hooks
* JavaScript (ES6)
* HTML5
* SCSS
* React-Bootstrap
* Axios
* React Router Dom
* React Mapbox GL
* React rating stars
* Http-proxy-middleware

### Dev tools

* VS Code
* Insomnia
* Yarn
* Git
* GitHub
* Excalidraw (Wireframing)
* Trello (tracker)
* Netlify (Deployment)


## Overview and Concept

A MERN-stack app that would assist users in planning their trips around Iceland. The app offers pre-built packages, where the user can view these places, they include restaurants, activities, volcanoes and so forth, on an interactive map. Added functionality includes authenticated users who can save these places to their profile in an attempt to create their own trip.

![screenshots](homepage)

## Approach Taken

### Planning

As a team, we had an idea of how each component should look like as we decided to use Excalidraw and create all the components. This helped us delegate tasks to each other and make sure we didn’t overlap on anything as merging would prove difficult once it came to committing our work to GitHub. Although the styling of our components changed over time given the tight deadline, our goal remained the same.

![screenshots](wireframe)

Trello helped in keeping track of these tasks, we decided what the MVP should look like and what would some Nice-To-Haves consist of, given we had extra time left at the end of the project.

![screenshots](trello)

As this was our first time using feature branches and GitHub as a team, we decided any time someone pushes to the main branch, we should all do it together. This made for great communication as we would always be vocal about which component we are working on and helped each other through potential merge conflicts. 

## Process

We first decided what our models should look like and created the back-end together. This included setting up Mongoose and Express first, which we attempted as a group. Then came the setup for the models. As our vision for the project was to include Mapbox and have all the locations pop-up on there, we knew our models would need to be based around that. We created a model called Places which would carry all the information about a certain place and specifically the longitude and latitude as that was pivotal to our plan. 

![screenshots](placeschema)

Next we created the user model. This consisted of the standard email and password authentication developed through JWT, and based on that authentication, we were able to give the user the ability to add places to their profile. This was key as we wanted the users to be able to have their own saved places on their account and be able to store them.

![screenshots](savedplace)

Moving on, we decided that each package, once clicked by the user would redirect them to the view with mapbox connected showing the daily itinerary. This proved tricky as the task of creating multiple booleans would be prone to errors but thanks to the team, we were able to create datasets on a excel sheet and delegate each of these locations to a specific day, helping the user to have a well thought out plan for their trip. 

![screenshots](map)

After much testing, our final layout for each dataset below looked like this, consisting of booleans to help us delegate each place to a package which would then be called out on the frontend with ease, giving us the final product of the screenshot above.

![screenshots](data)

This project also presented the new task of us using mapbox which at the time proved to be difficult. One of the main features we wanted to add was a route that would highlight the user’s journey related to the package they have picked. After diving into the documentation and installing versions of mapbox that were all but deprecated, we scrapped that plan. My teammate Patrick also emailed the person who was responsible for maintaining that package and we got a response a bit later past the deadline. 

We also found that some packages were still available but were not usable with React, which was a lesson well learnt for any future projects that involve mapbox.

![screenshots](mapbanner)

However, we did add most of the features from mapbox that we wanted to implement. Including markers, zoom and popups that we added functionality to. This made for the user journey to be smooth as they would not only view the place and its details but also be able to save it to their profile. As seen in the code previously, this require authentication, so the user would need to be logged in otherwise it would leave a message to the user requesting them to login.

![screenshots](mapsave)

The code below shows we needed to authenticate the user and show either the save button or a message to login based on the condition met.The handleClick function was set for this reason.

![screenshots](handleclick)
![screenshots](savedmessage)

## Wins, Challenges & Bugs

### Wins

This project was a huge learning curve for all of us, as we had only learnt how to use express, mongoDB and mongoose for a few days before entering this project. To be able to create this project and add the functionality we did was a massive win, specifically mapbox as we found ourselves always having to change the scope of how we will present it to the user and I have to say, we adapted pretty well. Another win would be getting familiar with reading documentation and using it to our advantage, this was the first project where we got familiar with using documentation. 

### Challenges

Deployment of this project on heroku was a challenge for all of us, as at this point we hadn’t deployed anything with a backend yet. The documentation wasn’t the best and having to figure out how to deploy the backend via MongoDB Atlas to heroku and then switching to netlify to deploy our frontend proved tricky. 

Once we managed to overcome that hurdle, mapbox was not rendering and we had to go further into why that was. After much reading on stackoverflow and GitHub, we found out that reverting back to an older version of mapbox would help fix the issue (version 5.2.5).

### Bugs and Blockers

Currently, when the user saves a location to their profile, once that popup is shut and you open another popup, the message still remains saying ‘saved!’ on all the other places until the browser is refreshed.


## Future Content & Improvements

* Give users the ability to delete saved places on their profile, time was short and we weren\t able to add that as it was a NTH.
* Users can create a whole package rather than only save locations.
* Error handling
* More places stored

## Key Learnings

Learning how to read documentation and implementing that onto our project was massive, as future projects proved to be easier and I'm much more confident now using all sorts of packages. Understanding how extensive the planning needs to be when it comes to creating a full-stack app as it requires your back-end to be the foundation of your project. 

In general, this was a great experience and a lot of valuable lessons were learnt from this project. 
