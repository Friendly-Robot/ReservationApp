/**
 * @format
 */
import sort from '../sortReservations';

it('sorts reservations correctly', () => {
  const unsortedData = [
    { hotelName: 'Hilton', arrivalDate: '12/30/2019', __typename: 'Reservation' },
    { hotelName: 'Hilton', arrivalDate: '12/28/2019', __typename: 'Reservation' },
    { hotelName: 'Hilton', arrivalDate: '04/30/2019', __typename: 'Reservation' },
    { hotelName: 'Hilton', arrivalDate: '1/30/2020', __typename: 'Reservation' },
    { hotelName: 'Marriot', arrivalDate: '11/21/2019', __typename: 'Reservation' },
    { hotelName: 'Marriot', arrivalDate: '10/30/2019', __typename: 'Reservation' },    
  ];
  const sortedData = [
    [
      { hotelName: 'Hilton', arrivalDate: '04/30/2019', __typename: 'Reservation' },
      { hotelName: 'Hilton', arrivalDate: '12/28/2019', __typename: 'Reservation' },
      { hotelName: 'Hilton', arrivalDate: '12/30/2019', __typename: 'Reservation' },
      { hotelName: 'Hilton', arrivalDate: '1/30/2020', __typename: 'Reservation' },
    ],
    [
      { hotelName: 'Marriot', arrivalDate: '10/30/2019', __typename: 'Reservation' },  
      { hotelName: 'Marriot', arrivalDate: '11/21/2019', __typename: 'Reservation' },
    ]
  ];
  const returnResult = (sortedReservations) => {
    expect(JSON.stringify(sortedReservations)).toEqual(JSON.stringify(sortedData));
  }
  sort(unsortedData, returnResult);
});
