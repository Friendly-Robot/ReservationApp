import gql from 'graphql-tag';

const reservationQuery = gql`
  query {
    reservations {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`

export default {
  reservationQuery,
}
