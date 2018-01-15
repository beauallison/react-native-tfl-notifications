import _ from 'lodash';
import React from 'react';
import propTypes from 'prop-types';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class NotificationsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: this.props.enabled };
  }

  render() {
    return (
      <View>
        <CheckBox
          title={_.startCase(this.props.station)}
          onPress={async () => {
            const enabled = !this.state.enabled;
            this.props.updateStation(enabled);

            return this.setState({ enabled });
          }}
          checked={this.state.enabled}
        />
      </View>
    );
  }
}

NotificationsItem.propTypes = {
  station: propTypes.string.isRequired,
  enabled: propTypes.bool,
  updateStation: propTypes.func.isRequired,
};

NotificationsItem.defaultProps = {
  enabled: false,
};
