<div align="center">

# Squad-Generator

Built with Node.js

 URL of the GitHub repository:https://github.com/TomFallon9/Squad-Generator



</div>

## Table of Contents 

* [Description](#description)
* [User Story](#user-story)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Built With](#built-with)
* [Credits](#credits)


## Description

This command line application will prompt the user for information about a development team. The user can input any number of team members, a manager, engineers and interns. When the user has finished building the team this application will create an HTML that displays a formatted team roster based on the information provided by the user.

### User Story

As a leader of a development team I want to generate a page with all the information for the team members in my squad. I want to easily input data for new employees to add to the page for future additions

## Installation

 [jest](https://jestjs.io/), for running the tests and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. Install by running the following command followed by dependencies
```
npm i
```

## Usage

The user will be prompted for their name, email, id, and certain information based on their role.  The application will be run with the following command:
```
node app.js
```

### Team Output

After the user finishes inputting all the team members, the [team.html](/team.html) page gets generated


    
</p>

## Tests

To run the tests in the test directory, run the following command:
```
npm test
```

## Built With

* [Node.js](https://nodejs.org/en/) - An open-source JavaScript runtime environment that executes JavaScript outside of the browser. 

## Credits

Class materials for Unit 10 

