# Contributing

### Checkout the correct branch
To contribute new features, please create either a fork of the `dev` branch, or a new branch off of it with a **descriptive name**.
**Do not use the `master` branch as the basis of new work.**

### Checking-in your contribution
Once the feature is complete, make sure you have pushed your contributions to your remote repo, and then create a pull request for your branch into `dev` (or another branch, if appropriate). It will then be reviewed and likely merged.

### Regarding `master`
`master` will be updated when stable and completed revisions of the project can be moved over from `dev`. Otherwise, it shouldn't be worked in.

### Running the project locally

1. Ensure that you are in the `website` directory
2. Navigate to the `server` folder by executing
```
cd server
```
3. Start the server by executing
```
node server.js
```
4. Open up a new command line window. Navigate to the `website` directory and execute the following command:
```
npm run-script build
```
