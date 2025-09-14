import { concreteNotificationsService, noOpNotificationsService } from '../notifications-services';

describe('notification Services', () => {
  test('concreteNotificationsService', () => {
    const notifications = concreteNotificationsService;

    expect(notifications).toHaveProperty('info');
    expect(notifications).toHaveProperty('success');
    expect(notifications).toHaveProperty('warning');
    expect(notifications).toHaveProperty('error');
    expect(notifications).toHaveProperty('confirm');
  });

  test('noOpNotificationsService', () => {
    const notifications = noOpNotificationsService;

    expect(notifications).toHaveProperty('info');
    expect(notifications).toHaveProperty('success');
    expect(notifications).toHaveProperty('warning');
    expect(notifications).toHaveProperty('error');
    expect(notifications).toHaveProperty('confirm');
  });
});
