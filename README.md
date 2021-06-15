# Portfolio-MERN


This project has a config.env file having the Mongo Atlas URL and the port. This file doesnt get checkedin


For Deployment
===============
First of all this project gets built in the local machine and then gets deployed to heroku. 
Using npm run dev:bundler, the project is built. The webpack configurations are present in the repo. Based on that, the bundle.js gets created in 'public' directory.

Now to run it locally, we can run command: npm run dev:server, which uses nodemon in the dev env to run the node project.
However, nodemon being a dev dependency, can not and rather should not be used in prod. Thats'y "start" script uses babel-node. The start script is required as 
Heroku searches for the start script to start the app in the server if the Procfile is not created for Heroku. 

For heroku deployment, refer to : https://dev.to/hawacodes/deploying-a-mern-app-with-heroku-3km7


Runtime: https://portfolio-swagat.herokuapp.com/
