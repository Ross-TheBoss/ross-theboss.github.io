# Fireworks Events in Plymouth Hi-Fi Prototype

This prototype uses SCSS and EJS templates which must be compiled into a static HTML/CSS/JS site. 

To run the prototype, install the required dependencies with `npm install` then execute `npm start`. This will produce all the site's files within the `public` folder and start a web server at `localhost:3000`. 

NOTE: By default, the site will not function properly unless it is hosted on a web server at `localhost:3000` since the base html tag within `templates/partials/head.ejs` defaults to this URL. This base URL, however, can be configured by setting the `BASEURL` environment variable before execution (see `set-base.js`).