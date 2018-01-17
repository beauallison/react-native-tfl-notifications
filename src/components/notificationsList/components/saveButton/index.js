import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'react-native-elements';

const SaveButton = props => (
  <Button
    raised
    buttonStyle={{ marginBottom: 10, backgroundColor: '#4286f4' }}
    textStyle={{ textAlign: 'center' }}
    title="Save"
    onPress={props.onPress}
    rounded
  />
);

SaveButton.propTypes = {
  onPress: propTypes.func.isRequired,
};

export default SaveButton;
