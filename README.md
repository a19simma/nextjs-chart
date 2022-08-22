## Introduction

This is a [nextjs](https://nextjs.org/) project, styled with [tailwind css](https://tailwindcss.com/)

The purpose of this repo is to learn react, javascript and working with api as a first project. To this effect, this website uses financial information gathered by a [backend flask server](https://github.com/a19simma/StockServer) and to meaningfully display it using html5 canvas.

The relevant code in this project is the CandleStickChart.js component and the CandleStickChart.js in the lib folder as this is where the logic and rendering code resides.

![selection](./stockchart_selection.png)

![chart](./stockchart_chart.png)

## Demo

[simonmalm.com](simonmalm.com)

The project is hosted on my laptop at home so if it doesn't work, I'm sorry!

To run it locally you can clone the project and run the development server:

```
npm i
npm run dev
```

## TODO

Currently, while you can login using OAuth and google. There is no functionality tied to it yet, other than displaying the google profile picture on the navbar.
