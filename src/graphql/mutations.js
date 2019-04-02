import gql from 'graphql-tag';

const addReservation = gql`
  mutation createReservation($id: ID!, $hotelName: String!, $name: String!, $arrivalDate: String!, $departureDate: String!) {
    createReservation(data: { id: $id, hotelName: $hotelName, name: $name, arrivalDate: $arrivalDate, departureDate: $departureDate,}) {
      id
      hotelName
      name
      arrivalDate
      departureDate
    }
  }
`;

export default {
  addReservation,
}
