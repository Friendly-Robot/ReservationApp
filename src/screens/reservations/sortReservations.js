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
            groupByHotel[hotelName].splice(i, 0, reservation);
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
    const firstYear = parseInt(splitFirstDate[2], 10);
    const secondYear = parseInt(splitSecondDate[2], 10);
    if (firstYear > secondYear) return false;
    const firstMonth = parseInt(splitFirstDate[0], 10);
    const secondMonth = parseInt(splitSecondDate[0], 10);
    if (firstMonth > secondMonth) return false;
    const firstDay = parseInt(splitFirstDate[1], 10);
    const secondDay = parseInt(splitSecondDate[1], 10);
    if (firstMonth === secondMonth && firstDay > secondDay) return false;
    return true;
  }
}

const sortReservations: sortInterface = new SortReservations();
export default sortReservations.sort;