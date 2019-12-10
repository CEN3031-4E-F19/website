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
5. Open up `localhost:5000` in a browser

### Deploying the project on Heroku
1. Ensure that you are on the `master` branch (run `git branch` to verify)
2. Create a Heroku `remote` by executing 
```
heroku git:remote -a niekaab
```
3. Push master to the Heroku remote by executing
```
git push heroku master
```
4. Open up `niekaab.herokuapp.com` in a browser
### APIs used
- **Bootstrap** for styling
- **EmailJS** for email notifications
- **PassportJS** for user authentication (admin portal)
- **cron** for scheduling (news)

### Borrowed code
- **Contact form** jsx borrowed from Bootstrap docs https://getbootstrap.com/docs/4.3/components/forms/
- **Admin panel** tables borrowed from Bootstrap docs https://getbootstrap.com/docs/4.4/content/tables/
- **Contact form** field validation borrowed from https://learnetto.com/blog/react-form-validation
