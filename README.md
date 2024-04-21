# The Tech Blog

## Table of Contents

  - [Description](#description)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tecnologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)

## Description

This full-stack tech blog uses MySQL2, Sequelize, Express, and Node.js to enable users to create accounts, log in/out, and post comments. It features RESTful APIs, Express Handlebars, and session management for a secure, interactive experience.

## Features

1. Object-Relational Mapping
Sequelize provides a seamless bridge between your JavaScript application and SQL databases, allowing you to interact with the database using JavaScript objects instead of raw SQL queries. This abstraction simplifies database operations and enhances code readability.

2. Database Abstraction
With Sequelize, you can work with various SQL databases such as PostgreSQL, MySQL, SQLite, and MSSQL, without having to write database-specific code. This flexibility enables you to switch between databases effortlessly, adapting to the specific needs of your project.

3. Model Definitions
Define your data models using JavaScript classes, representing tables in your database. Sequelize translates these models into database tables, streamlining the creation and management of your database schema.

4. Migration Support
Sequelize supports database migrations, allowing you to version control your database schema changes. This feature is crucial for managing database evolution in a collaborative development environment.

## Getting Started
To start using Sequelize, follow the installation instructions provided in the documentation. Create your models, define associations, and seamlessly interact with your database using JavaScript.

## Installation

1. Clone the repository
   
   ```bash
    git clone git@github.com:Jay1194/Tech-Blog.git

 # Navigate to the project directory
   cd The-Tech-Blog
   
### Install dependencies
    npm install

## Usage
1. Open a terminal and navigate to the project directory.
2. Run the server
   
   ```bash
   node server.js

## Technologies Used
- Sequelize: for Object-Relational Mapping in Node.js
- Node.js: for server-side JavaScript execution
- SQL Databases: PostgreSQL, MySQL, SQLite, MSSQL, etc.
- Bcrypt: for password encryption
- Dontev: for protecting passwords from github
- Express.js
- Handlebars.js
  
## Contributing
Contributions to Sequelize are welcome! If you have ideas for improvement or bug fixes, please fork the repository, implement your changes, and submit a pull request.

## License
![badge](https://img.shields.io/badge/license-MIT-brightgreen)
<br />
This application is covered by the MIT license. 
