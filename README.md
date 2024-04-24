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

![Screenshot 2024-04-24 122056](https://github.com/Jay1194/Tech-Blog/assets/105843570/3959515f-b3d1-437e-b2b4-81b4238c721b)
![Screenshot 2024-04-24 122126](https://github.com/Jay1194/Tech-Blog/assets/105843570/410ad559-5964-4535-a79f-5b0c882d8bde)
![Screenshot 2024-04-24 122147](https://github.com/Jay1194/Tech-Blog/assets/105843570/c8817a80-0ae5-4c72-a7a0-a2ae24098089)
![Screenshot 2024-04-24 122212](https://github.com/Jay1194/Tech-Blog/assets/105843570/dac22a0c-6064-45b7-8e90-390daf96167c)
![Screenshot 2024-04-24 122233](https://github.com/Jay1194/Tech-Blog/assets/105843570/287745d7-1e1d-49fd-ae3e-a0f3ada5a03f)
![Screenshot 2024-04-24 122312](https://github.com/Jay1194/Tech-Blog/assets/105843570/2e412f0e-735c-44f4-abe9-8b36c1eed402)
![Screenshot 2024-04-24 122345](https://github.com/Jay1194/Tech-Blog/assets/105843570/56965ff9-82d6-49c5-b40d-7c32780bb539)

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
