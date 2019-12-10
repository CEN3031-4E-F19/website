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

### Features implemented
#### Home Page

Provides information about the company's purpose.

![Screenshot of Home page](https://github.com/CEN3031-4E-F19/website/blob/readme-images/home_page.png "Home Page Screenshot")

#### Contact Form
Allows users to contact the company.

![Screenshot of blank Contact Form](https://github.com/CEN3031-4E-F19/website/blob/readme-images/contact_form_blank.png "Blank Contact Form Screenshot")

Additional fields will appear depending on responses.

![Screenshot of filled-out Contact Form](https://github.com/CEN3031-4E-F19/website/blob/readme-images/contact_form_filled_out.png "Filled-Out Contact Form Screenshot")

It will also check for invalid inputs and inform the user.

![Screenshot of incorrectly filled Contact Form](https://github.com/CEN3031-4E-F19/website/blob/readme-images/contact_form_invalid_input.png "Incorrectly Filled Contact Form Screenshot")

#### Up To Date News Feed

A news page is available which regularly updates with links to new articles.

![Screenshot of News Feed](https://github.com/CEN3031-4E-F19/website/blob/readme-images/news_page.png "News Feed Screenshot")

The news page can also be searched by keyword.

![Screenshot of News Feed Search Function](https://github.com/CEN3031-4E-F19/website/blob/readme-images/news_page_search.png "News Feed Search Screenshot")

#### Admin Panel

An administrator panel that is protected by login credentials.

![Screenshot of Admin Panel login page](https://github.com/CEN3031-4E-F19/website/blob/readme-images/admin_login.png "Admin Panel Login Page Screenshot")

The Admin Panel allows the administrator to see all new contact form submissions and allow deletion of submissions.

![Screenshot of Admin Panel](https://github.com/CEN3031-4E-F19/website/blob/readme-images/admin_panel.png "Admin Panel Login Screenshot")

The Admin Panel can be searched by name for specific entries.

![Screenshot of Admin Panel Search](https://github.com/CEN3031-4E-F19/website/blob/readme-images/admin_panel_search.png "Admin Panel Search Screenshot")

The Admin Panel will show more information when an entry is clicked on.

![Screenshot of Admin Panel displaying more information](https://github.com/CEN3031-4E-F19/website/blob/readme-images/admin_panel_more_info.png "Admin Panel More Information Screenshot")
