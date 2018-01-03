import _ from 'lodash';
import React from 'react';
import propTypes from 'prop-types';
import { Text, Switch, View } from 'react-native';

export default class NotificationsToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: this.props.enabled };
  }

  render() {
    return (
      <View>
        <Text>{_.startCase(this.props.station)}</Text>
        <Switch
          onValueChange={async () => {
            const enabled = await this.props.onValueChange(this.state.enabled)
              .catch(() => false);

            return this.setState({ enabled });
          }}
          style={{ marginBottom: 10 }}
          value={this.state.enabled}
        />
      </View>
    );
  }
}

NotificationsToggle.propTypes = {
  station: propTypes.string.isRequired,
  enabled: propTypes.bool,
  onValueChange: propTypes.func.isRequired,
};

NotificationsToggle.defaultProps = {
  enabled: false,
};
