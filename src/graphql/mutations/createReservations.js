import gql from 'graphql-tag';

const createReservation = gql`
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

export default createReservation;
