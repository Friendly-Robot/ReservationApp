# ReservationApp :earth_americas:

## Architecture
This application is organized by a component / responsibility hierarchical architecture design: <br>

All shared components are designed for optimal reusability and resides in the `common` directory. <br>
Screen components contain all its dependent components within its own self-describing directory; i.e., `reservations` contains all the components specifically relevant to its screen and none else.<br>

The main entry file can be traced from `<root>/index.js` to `<root>/src/setup.js` where the graphql Apollo Provider is staged for subsequent queries and mutations that take place in its children components.<br>

Unit tests are contained in their respective parent directories as well as their `snapshots` for future coverage reports. Extra care should be taken before running `npm run test:update` to update snapshots - this happens too easily and can mask bad commits if not thoroughly checked before overwriting.

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