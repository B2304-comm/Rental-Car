# Rental Car

A responsive car rental landing page with a booking form, vehicle showcase, animated brand sections, app download area, and an optional backend starter.

## Features

- Responsive navigation for desktop and mobile screens
- Hero booking form for pickup, start, and stop details
- Vehicle category cards for cars, SUVs, vans, and electric options
- Swiper-powered carousel for featured vehicles
- ScrollReveal animations for page sections
- CSS car lane animation for visual interest
- Optional Express, Sequelize, and SQLite backend starter

## Tech Stack

| Area | Tools |
| --- | --- |
| Frontend | HTML, CSS, JavaScript, Bootstrap |
| UI Libraries | Swiper.js, ScrollReveal, Remix Icon |
| Optional Backend | Node.js, Express, Sequelize, SQLite |

## Run Locally

Open `index.html` directly in a browser.

For the optional backend:

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
`-- assets and image files
```

## Notes

- Replace `YOUR_GOOGLE_MAPS_API_KEY` in `node.js` before using the map endpoint.
- Move images into an `assets/` folder in a future cleanup pass to make the repository easier to scan.

## Status

Complete as a static landing page. The backend file is a starter and can be expanded into a full booking API.
