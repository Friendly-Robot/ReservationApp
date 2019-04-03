/*
* @flow
*/

import React, { useState } from 'react';
import { Modal, StyleSheet, ScrollView, Text } from 'react-native';

import { Mutation } from 'react-apollo';
import createReservation from '../../graphql/mutations/createReservations';
import reservationQuery from '../../graphql/queries/reservationQuery';

import HeaderTitle from '../../common/HeaderTitle';
import InputRegular from '../../common/InputRegular';
import ButtonAction from '../../common/ButtonActionRound';

import theme from '../../theme';

type props = {
  closeModal: Function,
};

export default ({ closeModal = () => {} }: props) => {
  const [name, setName] = useState('');
  const [hotel, setHotel] = useState('');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');

  const date = new Date();
  const day = `${date.getDate()}`.length < 2 ? `0${date.getDate()}` : `${date.getDate()}`;
  const nextDay = `${date.getDate()}`.length < 2 ? `0${date.getDate() + 1}` : `${date.getDate() + 1}`;
  const month = `${date.getMonth() + 1}`.length < 2 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const year = `${date.getFullYear()}`.length < 2 ? `0${date.getFullYear()}` : `${date.getFullYear()}`;

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible
      onRequestClose={closeModal}
    >
      <HeaderTitle
        buttonPress={closeModal}
        buttonValue={'-'}
        title={'New Reservation'}
      />
      <Mutation mutation={createReservation} refetchQueries={[{ query: reservationQuery }]}>
        {(createReservationMutation, { data }) => (
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps={'never'}
          >
            <InputRegular
              label={'Hotel'}
              onChange={setHotel}
              placeholder={'Hilton'}
              value={hotel}
            />
            <InputRegular
              label={'Guest Name'}
              onChange={setName}
              placeholder={'John Doe'}
              value={name}
            />
            <InputRegular
              label={'Arrival'}
              onChange={setArrival}
              placeholder={`${month}/${day}/${year}`}
              value={arrival}
            />
            <InputRegular
              label={'Departure'}
              onChange={setDeparture}
              placeholder={`${month}/${nextDay}/${year}`}
              value={departure}
            />
            <ButtonAction
              onPress={() => {
                createReservationMutation({
                  variables: {
                    id: `${Math.random()}`,
                    hotelName: hotel,
                    name,
                    arrivalDate: arrival,
                    departureDate: departure,
                  }
                })
                  .then(res => {
                    closeModal();
                    console.log('Successfully added reservation!', res);
                  })
                  .catch(err => console.warn('Error adding new reservation:', err));
              }}
            />
          </ScrollView>
        )}
      </Mutation>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 40,
  },
});
