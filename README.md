# Cache Busting with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## [SemVer](https://docs.npmjs.com/about-semantic-versioning) your deploys

### `yarn version --patch`

for releases with only bug fixes

### `yarn version --minor`

for releases with new features w/ or w/o bug fixes

### `yarn version --major`

for major releases or breaking features

### `git push origin master --tags`

**Remember to push your commit with `--tag` attribute!**

### `yarn generate-build-version`

Run this command once to generate meta.json file inside public directory

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
