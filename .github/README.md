# MainWebsite

Front-End Source Code and Production Deployment for CSES WebDev's Website.

If something doesn't work, please [file an issue](https://github.com/cses-webdev-main/MainWebsite/issues/new).

## Test Locally

This site is built with React and uses react-scripts to both build and deploy the app, so it's easily reproducible locally (without secret keys).

Simply clone this repository onto your machine, then open that folder with a terminal.

```
npm i
npm run build
npm run start
```
*(Node must be installed for the commands to work - install [here](https://nodejs.org/en/download))*

Run the above commands in order to install all dependencies, build the app, and start it on a local port, respectively.

* Note: Any redirects, such as with OAuth verification, will likely not work locally, since they usually only permit redirects to prod.

## Tests

It is **HIGHLY RECOMMENDED** you write unit tests in the format of the provided example, src/LandingPage.test.js!
These will run on merge requests and **must** pass before merging.
