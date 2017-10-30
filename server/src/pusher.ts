var Pusher = require('pusher')

var pusher = new Pusher({
  appId: '422911',
  key: '91d6af0b1edccedbb84c',
  secret: '7a9ad427e8aca317c3fd',
  cluster: 'us2',
  encrypted: true
});

export let trigger = (channel: string, event: string, payload: any) => {
  pusher.trigger(channel, event, payload);
}