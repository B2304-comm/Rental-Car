# Rental Car

A responsive car rental landing page with a vehicle showcase, location section, animated brand strip, app download area, and a small CSS car animation for extra personality.

## Features

- Responsive navigation for mobile and desktop screens
- Hero booking form with pickup, start, and stop fields
- Vehicle category cards for cars, SUVs, vans, and electric options
- Swiper-powered dream car carousel with price updates
- ScrollReveal animations across the page
- Funny animated rental car lane built with HTML and CSS
- Animated languages and tools section for HTML, CSS, Bootstrap, and Java
- Optional Express and SQLite backend starter in `node.js`

## Tech Stack

- HTML
- CSS
- JavaScript
- Bootstrap
- Java
- Swiper.js
- ScrollReveal
- Remix Icon
- Node.js, Express, Sequelize, and SQLite for the optional backend

## Run Locally

Open `index.html` in a browser to view the frontend.

For the optional backend, install the required packages and start the server:

```bash
npm install express bcryptjs jsonwebtoken cors sequelize sqlite3 axios
node node.js
```

The backend starts on `http://localhost:5000`.

## Project Structure

```text
.
|-- index.html
|-- styles.css
|-- main.js
|-- node.js
|-- README.md
`-- image assets
```

## Notes

Replace `YOUR_GOOGLE_MAPS_API_KEY` in `node.js` before using the map endpoint.
