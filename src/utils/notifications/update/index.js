import { Notifications } from 'expo';
import { NotificationServer } from '../../../../config';

// POST /
// Notification Server
export default async (stations) => {
  const token = await Notifications.getExpoPushTokenAsync();

  const response = await fetch(NotificationServer, {
    method: 'POST',
    body: { token, stations },
  });

  return response.text();
};

