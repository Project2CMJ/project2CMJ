# Projuct 2 - Real Life Client - SELECT NUTRITION

Project 2 is our first opportunity to show employers what we are capable of. Our team was fortunate enought to not only create and deploy 



# Installation
1. Copy the clone link of the repository from GitHub
2. Open Bash or Terminal Window
3. When the console opens, navigate to the directory the repository will be added to
4. In the console, type the command "git clone" and paste the link to repository
5. Open repository in preferred code editor
6. Open terminal in code editor
7. Type in terminal "npm init -y" to install dependency packages needed

  Ensure the following packages are installed
- npm init -y
- npm install dotenv
- npm install express
- npm install MySQL2
- npm install sequelize



# Usage
1. After repository has been cloned, in the terminal, log in to MySQL by entering: mysql -u root -p and enter your password when prompted
2. Using MySQL run the schema.sql by typing: source schema.sql. This will create the database needed for this application
3. Quit MySQL by typing: \q
4. Run seed by typing: npm run seed
2. Start the app by running command: node server.js


## User Story (provided in the homework instructions)
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

```
## Acceptance Criteria (provided in the homework instructions)
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

```

## Why this project is important
The purpose of this project is apply our newly learned skills using command node js.

Skills to be implemented on this project are:
- Node.js 
- Express.js
- MySql
- Sequelize
- CRUD

## Actions taken for this project
- Utilized Node.js 
- Utilized Express.js
- Utilized MySql
- Utilized Sequelize
- Utilized CRUD
- Used git commands to add, commit, and push all changes on to GitHub repository

## View of how routes look on Insomnia

![Screen Shot 2022-03-15 at 10 37 06 PM](https://user-images.githubusercontent.com/94095220/158524033-bbb52404-e696-40da-87d1-1108195d62b0.png)



## Links to Application Video Demos and GitHup Repository
- Video demo of creating schema from the MySQL shell/demo of how to seed the database/demo of how to start the app: https://drive.google.com/file/d/1Eu_ldnMg2sJ7yvJFqNJq-xWtlVEC9OZE/view?usp=sharing
- Video demo of GET/POST/PUT/DELETE routes: https://drive.google.com/file/d/1BvmAwjLojKuUUMFbLUAku2pVAE8er85K/view?usp=sharing

- URL for GitHub repository: https://github.com/staazmeister/e-commerce-back-end.git
