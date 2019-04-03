# ReservationApp :earth_americas:

## Architecture
This application is designed with modularity in mind to closely resemble a multitier architecture system. The front end view components are distributed across screens and components whereas the data layer is decoupled into its own graphql directory. As the application grows in size, a mediator and facade system would greatly benefit the scalability moving forward by provisioning the basis for communication between distributed components without cross dependencies and also securing the application by allowing/restricting communication access based upon the authority of the caller.<br>

All shared components are designed for optimal reusability and resides in the `common` directory. <br>
Screen components contain all its dependent components within its own self-describing directory; i.e., `reservations` contains all the components specifically relevant to its screen and none else. <br>

The main entry file can be traced from `<root>/index.js` to `<root>/src/setup.js` where the graphql Apollo Provider is staged for subsequent queries and mutations that take place in its children components. <br>

Unit tests are contained in their respective parent directories as well as their `snapshots` for future coverage reports. Extra care should be taken before running `npm run test:update` to update snapshots - this happens too easily and can mask bad commits if not thoroughly checked before overwriting. <br>

Graphql queries and mutations are staged respectively within the `graphql` folder within the `src` directory. Each graphql action is named accordingly by its file name and documented within. Their responsibilities should inherently be readable and understandable from a high level and traceable to its origin from within components by following naming standards.

## Installation
### Clone the repo
`git clone https://github.com/Friendly-Robot/ReservationApp.git`

### Install node modules
`npm install`

### Install the application
`react-native run-ios` <br>
`react-native run-android`

## License
License [The MIT License](http://opensource.org/licenses/MIT)
Copyright (c) 2019 Andy Li