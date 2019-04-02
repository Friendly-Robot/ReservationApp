interface sortInterface {
  sort(reservations: Array<T>, setReservations: Function): Array<T>;
}

class SortReservations {
  sort = (reservations = [], setReservations = () => {}) => {
    const groupByHotel = {};
    reservations.forEach((res) => {
      if (res.__typename !== 'Reservation') return;
      const reservation = {...res};
      const { hotelName } = res;
      if (!groupByHotel[hotelName]) {
        groupByHotel[hotelName] = [reservation];
      } else {
        let i = 0;
        const currLength = groupByHotel[hotelName].length;
        while (i < currLength) {
          if (this.isFirstDateEarlier(res.arrivalDate, groupByHotel[hotelName][i].arrivalDate)) {
            groupByHotel[hotelName].splice(i, reservation);
            return;
          }
          i++;
        }
        groupByHotel[hotelName].push(reservation);
      }
    });

    const hotels = Object.keys(groupByHotel);
    const result = hotels.map(hotel => groupByHotel[hotel])
    setReservations(result);
  }

  isFirstDateEarlier = (firstDate: string, secondDate: string) => {
    const splitFirstDate = firstDate.split('/');
    const splitSecondDate = secondDate.split('/');
    if (parseInt(splitFirstDate[2], 10) < parseInt(splitSecondDate[2], 10)) return true;
    if (parseInt(splitFirstDate[1], 10) < parseInt(splitSecondDate[1], 10)) return true;
    if (parseInt(splitFirstDate[0], 10) < parseInt(splitSecondDate[0], 10)) return true;
    return false;
  }
}

const sortReservations: sortInterface = new SortReservations();
export default sortReservations.sort;