# ReservationApp :earth_americas:

## Architecture
This application is organized by a component / responsibility hierarchical architecture design: <br>

All shared components are designed for optimal reusability and resides in the `common` directory.
Screen components contain all its dependent components within its own self-describing directory; i.e., `reservations` contains all the components specifically relevant to its screen and none else.<br>

The main entry file can be traced from `<root>/index.js` to `<root>/src/setup.js` where the graphql Apollo Provider is staged for subsequent queries and mutations that take place in its children components.<br>


## Installation
### Clone the repo
`git clone https://github.com/Friendly-Robot/ReservationApp.git`

### Install node modules
`npm install`

### Install the application
`react-native run-ios`
`react-native run-android`

## License
License [The MIT License](http://opensource.org/licenses/MIT)
Copyright (c) 2019 Andy Li