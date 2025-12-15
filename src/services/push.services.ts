import fetch from 'node-fetch';

export class PushService {
  constructor(
    private fcmServerKey: string,
  ) {}

  async sendPush(
    fcmToken: string,
    title: string,
    body: string,
    data?: object,
  ) {
    const payload = {
      to: fcmToken,
      notification: {title, body},
      data: data ?? {},
    };

    const res = await fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `key=${this.fcmServerKey}`,
      },
      body: JSON.stringify(payload),
    });

    return res.json();
  }
}