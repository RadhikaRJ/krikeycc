# Krikey Code Challenge Full Stack Engineer

## Part 2A and Part 2B

Code for implementation of API mentioned in Part 2A and 2B is present in folder KrikeyPart2middlewareAPI with filename apiServer.js.

## Part 3

The link for deployed React webpage: [KrikeyCC React Webpage](https://radhikarj.github.io/krikeycc/)

Please see below for Execution Instructions.

## Instructions to run Part 1, 2 and 3 locally:

### Part 1

1. For running apiServer.js, first run the PostgreSQL database, create the tables and insert data into the database.
2. To run apiServer.js, clone the repository or download the code from [Part 2 API Repository](https://github.com/RadhikaRJ/KrikeyPart2middlewareAPI/tree/main).
   Then, run a terminal at folder location KrikeyPart2middlewareAPI on your system which contains the API file apiServer.js.
3. Next, run the command: `node apiServer.js`

The server will start to run at url and by using the below path, we can view the JSON response of the top 10 performing authors:
`http://localhost:3000/topAuthors`

4. To find the total revenue of a particular author, such as Lorelai Gilmore, provide the author name as shown in the URL below:
   `http://localhost:3000/topAuthors?author_name=Lorelai Gilmore`

### Part 2

1. Considering that NodeJS and ReactJS are installed, open a terminal at the location where the [krikeycc folder](https://github.com/RadhikaRJ/krikeycc) is cloned/downloaded.
2. To run the react application locally, navigate to the krikeycc folder and run the following command:
   `npm start`

It will request permission to run on another port (since our middleware apiServer.js is running at localhost:3000), enter “y” or type “yes” and the react application will launch on localhost at:
`http://localhost:3001/`

Here, the ReactJS code is fetching the data from the PostgreSQL database through the apiServer.js API endpoint running at localhost:3000 (server in Part 2) and displaying the list of all team members on the UI.

### Part 3

1. For deploying the web page developed as a React Application, the deployed web page (post deployment on third party platform) uses static content for the team members from Part 2 for display.
2. Steps to deploy the React web page on GitHub pages:

- Commit and push the react web application to a GitHub Repository.
- Update the package.json file to include the url of the repository and append the predeploy and deploy scripts as follows:
  ```
  "homepage": "http://RadhikaRJ.github.io/krikeycc",
  "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
  }
  ```
- Next, run the command in the terminal of the react web application:
  ```
  npm install gh-pages --save-dev
  ```
- Commit and push the updated package.json document.
- Create a gh-pages branch on GitHub repository.
- In the terminal of the web app, run the deploy command:
  ```
  npm run build
  ```
- Navigate to GitHub repository settings tab to get the URL of the deployed react web page.

## Instructions to get started with create React APP:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
